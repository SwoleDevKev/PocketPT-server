const express = require('express');
const router = express.Router();
const workoutController = require ('../controllers/workout-controller')




router
    .route('/:id')
    .get(workoutController.index)




module.exports = router;