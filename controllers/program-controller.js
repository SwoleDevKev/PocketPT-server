const knex = require('knex')(require('../knexfile'));


const getWeeklyProgram = async (req, res) => {
    
    try{
        const joined = await knex("custom_weekly_program")
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

    const {program_id, week_1, week_2, week_3, week_4} = req.body ;
    try{
        const rowsUpdated = await knex("programs").where({ "id": program_id}).update(
            {
                week_1 : week_1 || null,
                week_2: week_2 || null,
                week_3: week_3 || null,
                week_4: week_4 || null
            }
        )
        if (rowsUpdated === 0) {
            return res.status(404).json({
              message: `program with ID ${program_id} not found`
            });
          }
        const updatedProgram = await knex('programs').where({id:program_id})
        res.status(201).json(updatedProgram);
    } catch(error){
        res.status(500).json({
            message: `Unable to update weekly programs for program with id ${program_id} : ${error}`
        });
    }
}

const editDaily = async (req, res) => {

    const {weeklyProgram_id, day1, day2, day3, day4,day5,day6,day7} = req.body ;

    const array = [day1, day2, day3, day4,day5,day6,day7]
    for (let i = 0; i < array.length; i++){
        if (!array[i]){
           array[i] = null
        }
     }

    
    try{
       const rowsUpdated = await knex("custom_weekly_program").where({ "id": weeklyProgram_id}).update({'monday':array[0],'tuesday':array[1],"wednesday":array[2],'thursday':array[3],'friday':array[4],'saturday':array[5],'sunday':array[6]})
       if (rowsUpdated === 0) {
        return res.status(404).json({
          message: `program with ID ${weeklyProgram_id} not found`
        });
      }
        res.send('successfully updated weekly program').status(201);
    } catch(error){
        res.status(500).json({
            message: `Unable to update daily workouts for program with id ${weeklyProgram_id} : ${error}`
        });
    }
}


const addWeekly = async (req, res) => {

        const {weekly_program_name, weekly_program_details} = req.body;
        const {id} = req.params

        if (weekly_program_name && id){
            try{
                const newWorkout = await knex('custom_weekly_program').insert(
                    {
                        "trainer_id": id,
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

const addMonthly = async (req, res) => {

    const {program_name, program_details} = req.body;
    const {id} = req.params

    if (program_name && id){
        try{
            const newProgram = await knex('programs').insert(
                {
                    "trainer_id": id,
                    program_name,
                    program_details
                  }
            )
      
          const newProgramId = newProgram[0];
          const createdProgram = await knex('programs').where({ 'id': newProgramId })
            res.json(createdProgram).status(201)
        } catch(error){
            res.status(400).send(`Error retrieving Monthly program: ${error}`)
        }
    } else {
        res.status(400).send('Program Name and Trainer ID are required')

}

}


const getWeeks = async (req, res) => {


    const {id} = req.params ;
    try{

        const result = {}
        const workouts = []

        const program_info = await knex('programs').where({"programs.id": id }).select('id',
        "trainer_id",
        "program_name",
        "program_details")

        const week1 = await knex("programs")
        .join("custom_weekly_program","custom_weekly_program.id","programs.week_1")
        .select('custom_weekly_program.*')

        const week2 = await knex("programs")
        .join("custom_weekly_program","custom_weekly_program.id","programs.week_2")
        .select('custom_weekly_program.*')

        const week3 = await knex("programs")
        .join("custom_weekly_program","custom_weekly_program.id","programs.week_3")
        .select('custom_weekly_program.*')

        const week4 = await knex("programs")
        .join("custom_weekly_program","custom_weekly_program.id","programs.week_4")
        .select('custom_weekly_program.*')


        workouts.push(week1[0],week2[0],week3[0],week4[0])
        result.program_info = program_info[0]
        result.workouts = workouts
        
        res.json(result);
    } catch(error){
        res.status(500).json({
            message: `Unable to get weekly programs for program with id ${id} : ${error}`
        });
    }
}

const getMonthlyProgram = async (req, res) => {
   const {program_id} = req.params

   const program = await knex('programs').where({id:program_id})
   res.json(program)
}



module.exports = {
    index,
    getWeeks,
    getWeeklyProgram,
    getCustomWeeklyProgram,
    editWeekly,
    addWeekly,
    editDaily,
    addMonthly,
    getMonthlyProgram
    
};