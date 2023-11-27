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
            res.status(400).send(`Error retrieving warehouse: ${error}`)
        }
    }

const addExercise = async (req, res) =>{

    const {dailyWorkout_id, exercise_id} = req.body
    console.log(dailyWorkout_id, exercise_id)
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
        
    }
}



module.exports = {
    index,
    addExercise,
    getAll
  }