/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {

    const exists = await knex.schema.hasTable('exercises--custom_daily_workouts');
    if (exists) {
        await knex('exercises--custom_daily_workouts').del();
    }

    await knex('exercises--custom_daily_workouts').insert([
        {
            "id":1,
            "trainer_id": 1,
            "exercise_id": 1,
            "daily_workout_id": 1,
            
        },
        {
            id:2,
            "trainer_id": 1,
            "exercise_id": 14,
            "daily_workout_id": 1,
        },
        {
            id:3,
            "trainer_id": 1,
            "exercise_id": 11,
            "daily_workout_id": 1,
        },
        {
            id:4,
            "trainer_id": 1,
            "exercise_id": 9,
            "daily_workout_id": 2,
        },
        {
            id:5,
            "trainer_id": 1,
            "exercise_id": 16,
            "daily_workout_id": 2,
        },
        {
            id:6,
            "trainer_id": 1,
            "exercise_id": 7,
            "daily_workout_id": 2,
        },
        {
            id:7,
            "trainer_id": 1,
            "exercise_id": 4,
            "daily_workout_id": 2,
        },
        {
            id:8,
            "trainer_id": 1,
            "exercise_id": 15,
            "daily_workout_id": 2,
        },
        {
            id:9,
            "trainer_id": 1,
            "exercise_id": 12,
            "daily_workout_id": 3,
        },
        {
            id:10,
            "trainer_id": 1,
            "exercise_id": 2,
            "daily_workout_id": 3,
        },
        {
            id:11,
            "trainer_id": 1,
            "exercise_id": 17,
            "daily_workout_id": 3,
        },
        {
            id:12,
            "trainer_id": 1,
            "exercise_id": 5,
            "daily_workout_id": 3,
        }
    ])
    
        
};






