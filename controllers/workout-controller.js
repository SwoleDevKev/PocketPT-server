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
    try{
        const postedExercise = await knex('daily-workouts').insert(
            {
                "daily-workout_id": 1,
                "exercise_id": 1,
              }
        )
    } catch(error){
        
    }
}



module.exports = {
    index,
    addExercise,
    getAll
  }