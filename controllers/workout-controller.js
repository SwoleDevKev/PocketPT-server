const { request } = require('express');

const knex = require('knex')(require('../knexfile'));



const index = async (req, res) => {
    const {id} = req.params ;
    
    try{
        const joined = await knex("daily-workouts")
            .join("weekly-program--daily-workout","daily-workouts.id","weekly-program--daily-workout.daily-workout_id")
            .join("weekly-programs","weekly-programs.id","weekly-program--daily-workout.weekly-program_id")
            .select('*')
            .where({ 'weekly-program_id': id })
            res.json( joined);
  
        }catch (error){
            res.status(500).json({
                message: `Can't get workouts for this program: ${error}`
              })
        };

    }

    const getAll = async (_req, res) => {
        try {
            const data = await knex('daily-workouts');
            res.status(200).json(data);
        } catch (error) {
            res.status(400).send(`Error retrieving daily workouts: ${error}`)
        }
    }

const addExercise = async (req, res) =>{

    const {dailyWorkout_id, exercise_id} = req.body
    try{
        const postedExercise = await knex('exercises--daily-workout').insert(
            {
                "daily-workout_id": dailyWorkout_id,
                "exercise_id": exercise_id,
              }
        )
        const response = await knex('daily-workouts').where({ 'id': dailyWorkout_id })
        res.json(response).status(201)
    } catch(error){
        res.status(400).send(`Error retrieving daily workouts: ${error}`)
    }
}

const addCustomWorkout = async (req, res) =>{

    const {dailyWorkout_name, dailyWorkout_details, trainer_id} = req.body;
    console.log(dailyWorkout_details, dailyWorkout_name, trainer_id)
    if (dailyWorkout_name && dailyWorkout_details && trainer_id){
        try{
            const newWorkout = await knex('custom_daily_workouts').insert(
                {
                    trainer_id,
                    "daily-workout_name": dailyWorkout_name,
                    "daily-workout_details": dailyWorkout_details,
                  }
            )
      
          const newWorkoutId = newWorkout[0];
          const createdWorkout = await knex('custom_daily_workouts').where({ 'id': newWorkoutId })
            res.json(createdWorkout).status(201)
        } catch(error){
            res.status(400).send(`Error retrieving daily workouts: ${error}`)
        }
    } else res.status(400).send('all fields must be entered as requested')
    
}

const getCustom = async (req, res) => {
    try {
        const data = await knex('custom_daily_workouts');
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retrieving daily workouts: ${error}`)
    }
}

const removeExercise = async (req, res) =>{

    const {workoutId, exerciseId} = req.params
    console.log(req.params)
    try{
        const removedExercise = await knex('exercises--daily-workout').where({  "id": exerciseId,
    }).limit(1).del()
        
        res.send(`successfully removed exercise with id ${exercise_id}`).status(204)
    } catch(error){
        res.send(error).status(500)
    }
}



module.exports = {
    getCustom,
    addCustomWorkout,
    index,
    addExercise,
    remove: removeExercise,
    getAll
  }