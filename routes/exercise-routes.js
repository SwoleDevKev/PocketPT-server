const express = require('express');
const router = express.Router();
const exerciseController = require ('../controllers/exercise-controller')


// ******GET ALL Exercise or Post a Single Exercise******
router
    .route('/')
    .get(exerciseController.index)
    .get(exerciseController.getSome)

  
// ******GET/PUT/DELETE API FOR A SINGLE Exercise ITEM******
router
    .route('/:id')
    .get(exerciseController.getDailyExercises)
    



module.exports = router;