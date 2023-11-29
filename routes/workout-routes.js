const express = require('express');
const router = express.Router();
const workoutController = require ('../controllers/workout-controller')


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