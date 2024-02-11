const express = require('express');
const router = express.Router();
const workoutController = require ('../controllers/workout-controller')


router
    .route('/new')
    .post(workoutController.addCustomWorkout)

router
    .route('/custom/:id')
    .get(workoutController.getWorkout)

router
    .route('/edit/:id')
    .get(workoutController.editWorkout)



router
    .route('/new/:trainer_id')
    .get(workoutController.getCustom)



router
    .route('/')
    .post(workoutController.addExercise)
    
router
    .route('/:exerciseId')
    .delete(workoutController.remove)
    

router
    .route('/:id')
    .get(workoutController.index)






module.exports = router;