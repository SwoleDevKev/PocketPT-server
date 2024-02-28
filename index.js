require ('dotenv').config();
const express = require('express');
const knex = require('knex')(require('./knexfile'));
const cors = require('cors');
const programRoutes = require('./routes/program-routes')
const exerciseRoutes = require('./routes/exercise-routes');
const workoutRoutes = require('./routes/workout-routes')
const userRoutes = require("./routes/users");
const trainerUserRoutes = require("./routes/trainerUsers")

const app = express();
const PORT = process.env.PORT || 8083;

app.use(cors())
app.use(express.json());
app.use(express.static('public'))

app.use("/api/clients", userRoutes)
app.use("/api/trainers", trainerUserRoutes)
app.use('/api/programs', programRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/exercises', exerciseRoutes);


    
app.listen(PORT, () => {
    console.log(`Server is running! on port: ${PORT}`);
});

