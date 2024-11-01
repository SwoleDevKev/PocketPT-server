/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  
  const exists = await knex.schema.hasTable('exercises');
    if (exists) {
      await knex('exercises').del();
    }


  await knex('exercises').insert([
    {
      id: 1,
      trainer_id: 1,
      exercise_name: 'Push-up',
      video_link: 'IODxDxX7oi4',
    },
    {
      id: 2,
      trainer_id: 1,
      exercise_name: 'Squats',
      video_link: 'YaXPRqUwItQ',
    },
    {
      id: 3,
      trainer_id: 1,
      exercise_name: 'Plank',
      video_link: 'pSHjTRCQxIw',
    },
    {
      id: 4,
      trainer_id: 1,
      exercise_name: 'Bicep Curls',
      video_link: 'sAq_ocpRh_I',
    },
    {
      id: 5,
      trainer_id: 1,
      exercise_name: 'Lunges',
      video_link: 'g8-Ge9S0aUw',
    },
    {
      id: 6,
      trainer_id: 1,
      exercise_name: 'Crunches',
      video_link: 'NnVhqMQRvmM',
    },
    {
      id: 7,
      trainer_id: 1,
      exercise_name: 'Deadlifts',
      video_link: '0GCPn0VvXLc',

    },
    {
      id: 8,
      trainer_id: 1,
      exercise_name: 'Mountain Climbers',
      video_link: 'kLh-uczlPLg',
    },
    {
      id: 9,
      trainer_id: 1,
      exercise_name: 'Pull-ups',
      video_link: 'PHdHnZcbsB8',

    },
    {
      id: 10,
      trainer_id: 1,
      exercise_name: 'Russian Twists',
      video_link: '0V-8kqnPPeM',
    },
    {
      id: 11,
      trainer_id: 1,
      exercise_name: 'Bench Press',
      video_link: 'CjHIKDQ4RQo',
    },
    {
      id: 12,
      trainer_id: 1,
      exercise_name: 'Leg Press',
      video_link: 'q4W4_VJbKW0',
    },
    {
      id: 13,
      trainer_id: 1,
      exercise_name: 'Tricep Dips',
      video_link: 'qrS6aa0aQ9I',
    },
    {
      id: 14,
      trainer_id: 1,
      exercise_name: 'Shoulder Press',
      video_link: 'GLrn1vVHz24',
    },
    {
      id: 15,
      trainer_id: 1,
      exercise_name: 'Hammer Curls',
      video_link: 'RIEMoYL_h1Y',
      
    },
    {
      id: 16,
      trainer_id: 1,
      exercise_name: 'Lat Pulldowns',      
      video_link: 'JGeRYIZdojU',
    },
    {
      id: 17,
      trainer_id: 1,
      exercise_name: 'Seated Leg Curl',
      video_link: 'ceG0f6ntNcw',
    }
  ]);
};
