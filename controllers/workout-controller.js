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

module.exports = {
    index
  }