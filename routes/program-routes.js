const express = require('express');
const router = express.Router();
const programControl = require("../controllers/program-controller");

router
    .route("/weekly")
    .get(programControl.getWeeklyProgram)
    .put(programControl.editDaily)

router
    .route("/weekly/:id")
    .get(programControl.getWeeks)

router
    .route("/weekly/custom/:id")
    .get(programControl.getCustomWeeklyProgram)
    .post(programControl.addWeekly)

router
    .route("/monthly/custom/:id")
    // .get(programControl.getMonthlyProgram)
    .post(programControl.addMonthly)
 
    
// ******GET ALL Programs or Create a new Single Program ******
router
    .route("/")
    .get(programControl.index)
    .put(programControl.editWeekly)


// ******GET DELETE or UPDATE a new Single Program ******
router
    .route("/:id")
    .get(programControl.getWeeks)



module.exports = router;