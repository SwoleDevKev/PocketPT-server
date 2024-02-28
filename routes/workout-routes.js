const express = require('express');
const router = express.Router();
const workoutController = require ('../controllers/workout-controller')


router
    .route('/')
    .post(workoutController.addExercise)

router
    .route('/new')
    .post(workoutController.addCustomWorkout)

router
    .route('/new/:trainer_id')
    .get(workoutController.getCustom)

router
    .route('/custom/:id')
    .get(workoutController.getWorkout)

router
    .route('/edit/:id')
    .get(workoutController.editWorkout)





    
router
    .route('/:exerciseId')
    .delete(workoutController.remove)
    







module.exports = router;