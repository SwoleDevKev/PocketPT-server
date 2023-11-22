const express = require('express');
const router = express.Router();
const programControl = require("../controllers/program-controller");


// ******GET ALL Programs or Create a new Single Program ******
router
    .route("/")
    .get(programControl.index)
    .post(programControl.add)

// ******GET DELETE or UPDATE a new Single Program ******
router
    .route("/:id")
    .get(programControl.getWeeks)
    .put(programControl.edit)
    .delete(programControl.remove);



module.exports = router;