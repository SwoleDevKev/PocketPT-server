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
      video_link: 'https://www.youtube.com/embed/IODxDxX7oi4?si=PbIJEORlcqzPgVjb',
      rest_time: 60,
      status: 'done'
    },
    {
      id: 2,
      exercise_name: 'Squats',
      note: 'Great for lower body strength',
      reps: 20,
      sets: 4,
      video_link: 'https://www.youtube.com/embed/l83R5PblSMA?si=8ixPg6W50f4oEkNs',
      rest_time: 45,
      status: 'notDone'
    },
    {
      id: 3,
      exercise_name: 'Plank',
      note: 'Core stability exercise',
      reps: 10,
      sets: 3,
      video_link: 'https://www.youtube.com/embed/pSHjTRCQxIw?si=yMW6pWSpUzsWzkBo',
      rest_time: 30,
      status: 'done'
    },
    {
      id: 4,
      exercise_name: 'Bicep Curls',
      note: 'Isolation exercise for biceps',
      reps: 12,
      sets: 3,
      video_link: 'https://www.youtube.com/embed/sAq_ocpRh_I?si=9gHb_rJLecf7o9pr',
      rest_time: 45,
      status: 'notDone'
    },
    {
      id: 5,
      exercise_name: 'Lunges',
      note: 'Targets legs and glutes',
      reps: 16,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=your_lunges_video_id',
      rest_time: 40,
      status: 'done'
    },
    {
      id: 6,
      exercise_name: 'Crunches',
      note: 'Abdominal muscle workout',
      reps: 20,
      sets: 4,
      video_link: 'https://www.youtube.com/watch?v=your_crunches_video_id',
      rest_time: 30,
      status: 'notDone'
    },
    {
      id: 7,
      exercise_name: 'Deadlifts',
      note: 'Full-body compound exercise',
      reps: 8,
      sets: 4,
      video_link: 'https://www.youtube.com/watch?v=your_deadlifts_video_id',
      rest_time: 90,
      status: 'done'
    },
    {
      id: 8,
      exercise_name: 'Mountain Climbers',
      note: 'Cardio and core workout',
      reps: 15,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=your_mountain_climbers_video_id',
      rest_time: 30,
      status: 'notDone'
    },
    {
      id: 9,
      exercise_name: 'Pull-ups',
      note: 'Upper body strength exercise',
      reps: 10,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=your_pull_ups_video_id',
      rest_time: 45,
      status: 'notDone'
    },
    {
      id: 10,
      exercise_name: 'Russian Twists',
      note: 'Oblique muscles workout',
      reps: 15,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=your_russian_twists_video_id',
      rest_time: 30,
      status: 'done'
    },
    {
      id: 11,
      exercise_name: 'Bench Press',
      note: 'Builds upper body strength',
      reps: 12,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=your_bench_press_video_id',
      rest_time: 60,
      status: 'notDone'
    },
    {
      id: 12,
      exercise_name: 'Leg Press',
      note: 'Targets quads and hamstrings',
      reps: 15,
      sets: 4,
      video_link: 'https://www.youtube.com/watch?v=your_leg_press_video_id',
      rest_time: 45,
      status: 'done'
    },
    {
      id: 13,
      exercise_name: 'Tricep Dips',
      note: 'Effective for triceps',
      reps: 10,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=your_tricep_dips_video_id',
      rest_time: 30,
      status: 'notDone'
    },
    {
      id: 14,
      exercise_name: 'Shoulder Press',
      note: 'Targets deltoids',
      reps: 12,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=your_shoulder_press_video_id',
      rest_time: 45,
      status: 'done'
    },
    {
      id: 15,
      exercise_name: 'Hammer Curls',
      note: 'Alternate bicep exercise',
      reps: 12,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=your_hammer_curls_video_id',
      rest_time: 45,
      status: 'notDone'
    },
    {
      id: 16,
      exercise_name: 'Lat Pulldowns',
      note: 'Back muscle isolation',
      reps: 12,
      sets: 3,
      video_link: 'https://www.youtube.com/watch?v=your_lat_pulldowns_video_id',
      rest_time: 45,
      status: 'notDone'
    },
    {
      id: 17,
      exercise_name: 'Seated Leg Curl',
      note: 'Targets hamstrings',
      reps: 15,
      sets: 4,
      video_link: 'https://www.youtube.com/watch?v=your_seated_leg_curl_video_id',
      rest_time: 45,
      status: 'done'
    }
  ]);
};
