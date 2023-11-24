require ('dotenv').config();
const express = require('express');
const knex = require('knex')(require('./knexfile'));
const cors = require('cors');
const programRoutes = require('./routes/program-routes')
const exerciseRoutes = require('./routes/exercise-routes');
const mockDataRoutes = require('./routes/mockdata-routes')
const workoutRoutes = require('./routes/workout-routes')
const userRoutes = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 8083;

app.use(cors())
app.use(express.json());

app.use("/api/users", userRoutes)
app.use('/api/mockData' ,mockDataRoutes)
app.use('/api/programs', programRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/exercises', exerciseRoutes);







  // get weekly programs for a specific program 
  app.get('/test-join3', async (req, res) => {
    try{
        const joined = await knex("weekly-programs")
        .join("programs--weekly-programs","weekly-programs.id","programs--weekly-programs.weekly-program_id")
        .join("programs","programs.id","programs--weekly-programs.program_id")
        .select('*')
        .where({ 'program_id': 1 })
        res.json( joined);
    } catch(error){

    }
    
  });

  //programs--weekly-programs

    
app.listen(PORT, () => {
    console.log(`Server is running! at http://localhost:${PORT}`);
});


