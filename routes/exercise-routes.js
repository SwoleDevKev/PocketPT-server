const express = require('express');
const router = express.Router();
const exerciseController = require ('../controllers/exercise-controller')


// ******GET ALL or Specific Exercises ******
router
    .route('/')
    .get(exerciseController.index)
    .get(exerciseController.getSome)

  
// ******GET ALL or Specific custom Exercises ******

router
    .route('/custom/:id')
    .get(exerciseController.allCustom)


// ******GET/PUT/DELETE API FOR A SINGLE Exercise ITEM******
router
    .route('/:id')
    // .get(exerciseController.getDailyExercises)
    



module.exports = router;