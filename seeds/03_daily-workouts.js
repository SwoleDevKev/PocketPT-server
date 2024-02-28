/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
    await knex('custom_daily_workouts').del()
    await knex('custom_daily_workouts').insert([
        {
            id:1,
            trainer_id: 1,
            "daily-workout_name": 'easy push day',
            'daily-workout_details': 'chest focused push day for beginners' ,
        },
        {
            id:2,
            trainer_id: 1,
            "daily-workout_name": 'easy pull day',
            'daily-workout_details': 'back focused pull day for beginners' ,
        },
        {
            id:3,
            trainer_id: 1,
            "daily-workout_name": 'easy leg day',
            'daily-workout_details': 'quad focused leg day for beginners' ,
        }
    ])
        
};






