/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('exercises--daily-workout').del();
  await knex('exercises').del();
  await knex('exercises').insert([
    {
      id: 1,
      exercise_name: 'Push-up',
      note: 'Basic upper body exercise',
      reps: 15,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
      rest_time: 60,
      status: 'notDone'
    },
    {
      id: 2,
      exercise_name: 'Squats',
      note: 'Great for lower body strength',
      reps: 20,
      sets: 4,
      video_link: 'https://www.youtube.com/watch?v=YaXPRqUwItQ&pp=ygUUc3F1YXRzIGRlbW9uc3RyYXRpb24%3D',
      rest_time: 45,
      status: 'notDone'
    },
    {
      id: 3,
      exercise_name: 'Plank',
      note: 'Core stability exercise',
      reps: 10,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=pSHjTRCQxIw&pp=ygUFcGxhbms%3D',
      rest_time: 30,
      status: 'notDone'
    },
    {
      id: 4,
      exercise_name: 'Bicep Curls',
      note: 'Isolation exercise for biceps',
      reps: 12,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=sAq_ocpRh_I&pp=ygULYmljZXAgY3VybHM%3D',
      rest_time: 45,
      status: 'notDone'
    },
    {
      id: 5,
      exercise_name: 'Lunges',
      note: 'Targets legs and glutes',
      reps: 16,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=g8-Ge9S0aUw',
      rest_time: 40,
      status: 'notDone'
    },
    {
      id: 6,
      exercise_name: 'Crunches',
      note: 'Abdominal muscle workout',
      reps: 20,
      sets: 4,
      video_link: 'https://www.youtube.com/watch?v=NnVhqMQRvmM',
      rest_time: 30,
      status: 'notDone'
    },
    {
      id: 7,
      exercise_name: 'Deadlifts',
      note: 'Full-body compound exercise',
      reps: 8,
      sets: 4,
      video_link: 'https://www.youtube.com/watch?v=0GCPn0VvXLc',
      rest_time: 90,
      status: 'notDone'
    },
    {
      id: 8,
      exercise_name: 'Mountain Climbers',
      note: 'Cardio and core workout',
      reps: 15,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=kLh-uczlPLg',
      rest_time: 30,
      status: 'notDone'
    },
    {
      id: 9,
      exercise_name: 'Pull-ups',
      note: 'Upper body strength exercise',
      reps: 10,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=PHdHnZcbsB8',
      rest_time: 45,
      status: 'notDone'
    },
    {
      id: 10,
      exercise_name: 'Russian Twists',
      note: 'Oblique muscles workout',
      reps: 15,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=0V-8kqnPPeM',
      rest_time: 30,
      status: 'notDone'
    },
    {
      id: 11,
      exercise_name: 'Bench Press',
      note: 'Builds upper body strength',
      reps: 12,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=CjHIKDQ4RQo',
      rest_time: 60,
      status: 'notDone'
    },
    {
      id: 12,
      exercise_name: 'Leg Press',
      note: 'Targets quads and hamstrings',
      reps: 15,
      sets: 4,
      video_link: 'https://www.youtube.com/watch?v=q4W4_VJbKW0',
      rest_time: 45,
      status: 'notDone'
    },
    {
      id: 13,
      exercise_name: 'Tricep Dips',
      note: 'Effective for triceps',
      reps: 10,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=qrS6aa0aQ9I',
      rest_time: 30,
      status: 'notDone'
    },
    {
      id: 14,
      exercise_name: 'Shoulder Press',
      note: 'Targets deltoids',
      reps: 12,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=GLrn1vVHz24',
      rest_time: 45,
      status: 'notDone'
    },
    {
      id: 15,
      exercise_name: 'Hammer Curls',
      note: 'Alternate bicep exercise',
      reps: 12,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=RIEMoYL_h1Y',
      rest_time: 45,
      status: 'notDone'
    },
    {
      id: 16,
      exercise_name: 'Lat Pulldowns',
      note: 'Back muscle isolation',
      reps: 12,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=JGeRYIZdojU',
      rest_time: 45,
      status: 'notDone'
    },
    {
      id: 17,
      exercise_name: 'Seated Leg Curl',
      note: 'Targets hamstrings',
      reps: 15,
      sets: 4,
      video_link: 'https://www.youtube.com/watch?v=ceG0f6ntNcw',
      rest_time: 45,
      status: 'notDone'
    }
  ]);
};
