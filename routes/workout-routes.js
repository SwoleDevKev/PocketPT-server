const express = require('express');
const router = express.Router();
const workoutController = require ('../controllers/workout-controller')


router
    .route('/new')
    .post(workoutController.addCustomWorkout)

router
    .route('/custom/:day/:id')
    .get(workoutController.getWorkout)


router
    .route('/new/:trainer_id')
    .get(workoutController.getCustom)



router
    .route('/')
    .get(workoutController.getAll)
    .post(workoutController.addExercise)
    
router
    .route('/:exerciseId')
    .delete(workoutController.remove)
    

router
    .route('/:id')
    .get(workoutController.index)






module.exports = router;