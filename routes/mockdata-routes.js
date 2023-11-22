const express = require('express');
const router = express.Router();
const fs = require('fs')
const mockdata = require('../mockData/data.json')


router
    .route('/')
    .get((req,res)=>{
        res.json(mockdata)
    })


module.exports = router