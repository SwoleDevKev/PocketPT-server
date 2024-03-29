
const knex = require('knex')(require('../knexfile'));


const getWorkout = async (req, res) => {
        const {id} = req.params ;

       const test = await knex("custom_weekly_program")
        .where({ 'custom_weekly_program.id': id })
        .select('monday','tuesday','wednesday','thursday','friday','saturday','sunday')

        
        try {
            const result = []
            const object = test[0]

                for (key in object){
                    if (object[key]){
                        try{
                            const joined = await knex("custom_daily_workouts")
                                .join('custom_weekly_program','custom_daily_workouts.id',`custom_weekly_program.${key}`)
                                .select('custom_daily_workouts.*')
                                .where({ 'custom_weekly_program.id': id })
                                joined[0].day = key
                                result.push(joined[0]);
                      
                            }catch (error){
                                res.status(500).json({
                                    message: `Can't get workouts for this program: ${error}`
                                  })
                            };
                    
                        }
                    }
            res.json(result)
        } catch (error) {
            res.status(500).json({
                message: `Can't get workouts for this program: ${error}`
              })
        }
    
    }   
        
    const editWorkout = async (req, res) => {
        const {id} = req.params ;

       const result = await knex("custom_weekly_program")
        .where({ 'custom_weekly_program.id': id })
        .select('monday','tuesday','wednesday','thursday','friday','saturday','sunday')
        res.json(result)
    }

const addExercise = async (req, res) =>{

    const {daily_workout_id, exercise_id, trainer_id} = req.body
    try{
        const postedExercise = await knex('exercises--custom_daily_workouts').insert(
            {
                daily_workout_id ,
                exercise_id,
                trainer_id,
              }
        )
        const response = await knex('custom_daily_workouts').where({ 'id': daily_workout_id })
        res.json(response).status(201)
    } catch(error){
        res.status(400).send(`Error retrieving daily workouts: ${error}`)
    }
}

const addCustomWorkout = async (req, res) =>{

    const {dailyWorkout_name, dailyWorkout_details, trainer_id} = req.body;
    if (dailyWorkout_name  && trainer_id){
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

    const {trainer_id} = req.params

    try {
        const data = await knex('custom_daily_workouts').where({ trainer_id });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retrieving daily workouts: ${error}`)
    }
}

const removeExercise = async (req, res) =>{

    const {exerciseId} = req.params
    try{
        await knex('exercises--custom_daily_workouts').where({  "id": exerciseId,
    }).limit(1).del()
        
        res.send(`successfully removed exercise with id ${exerciseId}`).status(204)
    } catch(error){
        res.send(error).status(500)
    }
}



module.exports = {
    getCustom,
    getWorkout,
    addCustomWorkout,
    addExercise,
    remove: removeExercise,
    editWorkout
  }