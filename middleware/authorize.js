const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const bearerTokenString = req.headers.authorization;
    console.log("this is running");
    if (!bearerTokenString) {
        return res.status(401).json({error: "Resource requires Bearer token in Authorization header"});
    }

    const splitBearerTokenString = bearerTokenString.split(" ");

    if (splitBearerTokenString.length !== 2) {
        return res.status(400).json({error: "Bearer token is malformed"});
    }

    const token = splitBearerTokenString[1];

    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({error: "Invalid JWT"});
        }
		delete req.password;
        req.user = decoded;
        console.log("you are authorized");
        next();
    });
}