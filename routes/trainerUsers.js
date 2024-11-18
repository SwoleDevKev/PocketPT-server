const router = require("express").Router();
const knex = require('knex')(require('../knexfile'));
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authorize = require('../middleware/authorize');
const multer  = require('multer')
const {S3Client, PutObjectCommand, GetObjectCommand} = require('@aws-sdk/client-s3');
const {getSignedUrl} = require('@aws-sdk/s3-request-presigner');
const crypto = require('crypto');





const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const bucketName=  process.env.BUCKET_NAME
const bucketRegion= process.env.BUCKET_REGION
const accessKey= process.env.AWS_ACCESS_KEY_ID
const secretaccesskey= process.env.AWS_SECRET_ACCESS_KEY

 
const S3 = new S3Client({
    region: bucketRegion,
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretaccesskey
    }

})

const randomImageName = () => {
    return crypto.randomBytes(32).toString('hex')
}

router.post("/register", async (req, res) => {
    const { first_name, last_name, phone, email, password } = req.body;
    
    if (!first_name || !last_name || !email || !password) {
        return res.status(400).json("Please enter the required fields.");
    }

    const hashedPassword = bcrypt.hashSync(password);

    // Create the new user
    const newUser = {
        first_name,
        last_name,
        phone,
        email,
        password: hashedPassword
    };

    // Insert it into our database
    try {
        await knex('trainers').insert(newUser);
        res.status(201).send("Registered successfully");
    } catch (error) {
        console.log(error);
        res.status(400).send("Failed registration");
    }
});


router.post("/login", async (req, res) => {

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send("Please enter the required fields");
    }
    // Find the user
    const user = await knex('trainers').where({ email: email }).first();
    if (!user) {
        return res.status(400).send("Invalid email");
    }

    // Validate the password
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
        return res.status(400).send("Invalid password");
    }

    // Generate a token
    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_KEY,
        { expiresIn: "24h" }
    );

    res.json({ token })
});



router.get('/current', async (req, res) => {
	if(!req.headers.authorization) {
		return res.status(401).send('Please login')
	}

	const authHeader = req.headers.authorization;
	const authToken = authHeader.split(' ')[1];

	try {
		const decoded = jwt.verify(authToken, process.env.JWT_KEY)

		const user = await knex('trainers').where({id: decoded.id}).first();
		delete user.password;

        if (user.icon) {
            const url = await getSignedUrl(S3, new GetObjectCommand({Bucket: process.env.BUCKET_NAME, Key: user.icon}), { expiresIn: 30 })
            user.icon = url
        }
		res.json(user)

	} catch(error) {
		return res.status(401).send("Invalid auth token");
	}
})


//Demonstrate using auth on a single route
router.get("/:id", authorize, async (req, res)=> {

   const {id} = req.params

    try {
		const users = await knex
		.select("*")
		.from("clients")
        .where({ 'trainer_id': id });


        for (let user of users) {
            if (user.icon) {
                const url = await getSignedUrl(S3, new GetObjectCommand({Bucket: process.env.BUCKET_NAME, Key: user.icon}), { expiresIn: 30 })
                user.icon = url
        }
        }


		res.json(users);
	} catch (error) {
		res.status(500).json({ message: "Unable to retrieve users data" });
	}
})

router.get("/", async (req, res)=> {

    try {
		const users = await knex
		.select("first_name","id","last_name","trainer_avatar")
		.from("trainers")
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: "Unable to retrieve trainers data" });
	}
})


router.put('/icon', upload.single('icon'), async (req, res) => {

    const id = req.body.id;

    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }
    

    const image = req.file.buffer
    const imageName = randomImageName()
    const putObject = new PutObjectCommand({
        Bucket: bucketName,
        Key: imageName,
        Body: image,
        ContentType: req.file.mimetype

    })

    try {        
        
        if (!req.body.id || isNaN(parseInt(req.body.id, 10))) {
            return res.status(400).send('Invalid user ID');
        }

        await S3.send(putObject)
        const rowsUpdated = await knex('trainers').where({ id }).update({ icon: imageName });
        if (rowsUpdated === 0) {
            return res.status(500).send('Could not update user profile picture')
        }
        const updatedData = await knex('trainers')
        .select('first_name', 'last_name', 'icon')
        .where({ id })
        .first();

        res.status(200).json(updatedData);
        

    } catch (error) {
        console.error(error)    
        res.status(500).send('Failed to upload icon')
    }
    

})



module.exports = router;
