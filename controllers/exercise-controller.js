const knex = require('knex')(require('../knexfile'));

const index = async (_req, res) => {
  try {
    const data = await knex('exercises')
      .select('*');
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(`Error retrieving exercises: ${error}`)
  }
}

const allCustom = async (req, res) => {
  const { id } = req.params;
  try{
    const joined = await knex("exercises")
    .join("exercises--custom_daily_workouts","exercises.id","exercises--custom_daily_workouts.exercise_id")
    .join("custom_daily_workouts","custom_daily_workouts.id","exercises--custom_daily_workouts.daily_workout_id")
    .select('*','exercises--custom_daily_workouts.*')
    .where({ 'daily_workout_id': id })
    res.json( joined);
} catch(error){
  res.status(400).send(`Error retrieving exercises for workout with id : ${id} ${error}`);
}
};


const getDailyExercises = async (req, res) => {
  const { id } = req.params;
  try{
    const joined = await knex("exercises")
    .join("exercises--daily-workout","exercises.id","exercises--daily-workout.exercise_id")
    .join("daily-workouts","daily-workouts.id","exercises--daily-workout.daily-workout_id")
    .select('*','exercises--daily-workout.*')
    .where({ 'daily-workout_id': id })
    res.json( joined);
} catch(error){
  res.status(400).send(`Error retrieving exercises for workout with id : ${id} ${error}`);
}
};

const getSome = async (req, res) => {
  const { id } = req.params;
  
  try {const joined = await knex("exercises")
  .join("exercises--daily-workout","exercises.id","exercises--daily-workout.exercise_id")
  .join("daily-workouts","daily-workouts.id","exercises--daily-workout.daily-workout_id")
  .select('*')
  .where({ 'daily-workout_id': id })
  res.json( joined);
  } catch (error) {
    res.status(500).json({
      message: `Can't get exercises for this workout: ${error}`
    })
  }
};





module.exports = {
  index,
  getSome,
  allCustom,
  getDailyExercises,
}