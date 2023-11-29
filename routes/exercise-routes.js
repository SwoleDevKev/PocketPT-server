const express = require('express');
const router = express.Router();
const exerciseController = require ('../controllers/exercise-controller')


// ******GET ALL Exercise or Post a Single Exercise******
router
    .route('/')
    .get(exerciseController.index)
    .get(exerciseController.getSome)
    .post(exerciseController.add)

  
// ******GET/PUT/DELETE API FOR A SINGLE Exercise ITEM******
router
    .route('/:id')
    .get(exerciseController.getDailyExercises)
    .delete(exerciseController.remove)
    .put(exerciseController.update)
    



module.exports = router;