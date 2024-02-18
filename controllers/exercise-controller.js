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

const addExercise = async (req,res) => {
    const {trainer_id, exercise_name, video_link} = req.body;

    try {
      const newExercise = await knex("exercises").insert({
        trainer_id,
        exercise_name,
        video_link,
      })

      const newExerciseId = newExercise[0];
      const createdExercise = await knex('custom_daily_workouts').where({ 'id': newExerciseId })
        res.json(createdExercise).status(201)
    }catch(error){
      res.status(400).send(`Error creating exercise: ${error}`)
    }
}

const editExerciseDetails = async (req, res) => {
   const {id} = req.params
   const {sets,reps,weigth,rest,note} = req.body 

   try {
      const rowsUpdated = await knex('exercises--custom_daily_workouts').where({id}).update({reps,sets,weigth,rest_time: rest,note})
      
      if (rowsUpdated == 0){
        return res.status(404).json({
          message: `exercise with ID ${id} not found`
        });
      }
     const updatedExercise =  await knex('exercises--custom_daily_workouts').where({id})
     res.status(201).json(updatedExercise)
   } catch(error){
      res.status(400).json({ message: `Error updating exercise: ${error}` })
   }
}




module.exports = {
  index,
  allCustom,
  getDailyExercises,
  addExercise,
  editExerciseDetails
}