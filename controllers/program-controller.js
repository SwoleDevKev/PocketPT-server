const knex = require('knex')(require('../knexfile'));


const getWeeklyProgram = async (req, res) => {
    
    try{
        const joined = await knex("weekly-programs")
        .select('*');
        res.json(joined)
    } catch(error){
        res.status(500).json({
            message: `Unable to get weekly programs : ${error}`
        });
    }
} 

const getCustomWeeklyProgram = async (req, res) => {
    
    const {id} = req.params
    try{
        const joined = await knex("custom_weekly_program")
        .where({"trainer_id":id})
        .select('*');
        res.json(joined)
    } catch(error){
        res.status(500).json({
            message: `Unable to get weekly programs : ${error}`
        });
    }
}

const index = async (_req, res) => {
    try {
        const data = await knex('programs');
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retrieving programs: ${error}`)
    }
}


const editWeekly = async (req, res) => {

    const {program_id, week1, week2, week3, week4} = req.body ;
    try{
        await knex("programs--weekly-programs").where({ "program_id": program_id}).del()
        const newEntry = await knex("programs--weekly-programs")
        .insert([
            {"program_id": program_id,
            "weekly-program_id":week1},
            {"program_id": program_id,
            "weekly-program_id":week2},
            {"program_id": program_id,
            "weekly-program_id":week3},
            {"program_id": program_id,
            "weekly-program_id":week4},
        ])
        res.send('successfully updated program').status(201);
    } catch(error){
        res.status(500).json({
            message: `Unable to update weekly programs for program with id ${program_id_id} : ${error}`
        });
    }
}

const editDaily = async (req, res) => {

    const {weeklyProgram_id, day1, day2, day3, day4,day5,day6,day7} = req.body ;

    const array = [day1, day2, day3, day4,day5,day6,day7]
    const filteredArr = array.filter((day)=> day)

    const result = filteredArr.map((dailyWorkout)=>{
     return   {"weekly-program_id":weeklyProgram_id,
            "daily-workout_id": dailyWorkout
        }
    })
    try{
        await knex("weekly-program--daily-workout").where({ "weekly-program_id": weeklyProgram_id}).del()
        const newEntry = await knex("weekly-program--daily-workout")
        .insert(result)
        res.send('successfully updated weekly program').status(201);
    } catch(error){
        res.status(500).json({
            message: `Unable to update daily workouts for program with id ${weeklyProgram_id} : ${error}`
        });
    }
}


const addWeekly = async (req, res) => {

        const {weekly_program_name, weekly_program_details, trainer_id} = req.body;

        if (weekly_program_name && weekly_program_details && trainer_id){
            try{
                const newWorkout = await knex('custom_weekly_program').insert(
                    {
                        trainer_id,
                        weekly_program_name,
                        weekly_program_details
                      }
                )
          
              const newWorkoutId = newWorkout[0];
              const createdWorkout = await knex('custom_weekly_program').where({ 'id': newWorkoutId })
                res.json(createdWorkout).status(201)
            } catch(error){
                res.status(400).send(`Error retrieving daily workouts: ${error}`)
            }
        } else res.status(400).send('all fields must be entered as requested')

}


const getWeeks = async (req, res) => {

    const {id} = req.params ;
    try{
        const joined = await knex("weekly-programs")
        .join("programs--weekly-programs","weekly-programs.id","programs--weekly-programs.weekly-program_id")
        .join("programs","programs.id","programs--weekly-programs.program_id")
        .select('*')
        .where({ 'program_id': id })
        res.json( joined);
    } catch(error){
        res.status(500).json({
            message: `Unable to get weekly programs for program with id ${id} : ${error}`
        });
    }
}




module.exports = {
    index,
    getWeeks,
    getWeeklyProgram,
    getCustomWeeklyProgram,
    editWeekly,
    addWeekly,
    editDaily,
    
};