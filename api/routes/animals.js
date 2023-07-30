const express=require('express');
const router= express.Router();
const Animals = require('../model/animals');
const mongoose=require('mongoose');
const animals = require('../model/animals');

// fetching all animals record
router.get('/',(req,res,next)=>{
    Animals.find()
    .then(result=>{
        res.status(200).json({
            animalsData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    })
})


// router.get('/',(req,res,next)=>{
//     res.status(200).json({
//         msg: 'this is Animals get request'
//     })
// })

// router.post('/',(req,res,next)=>{
//     res.status(200).json({
//         msg: 'this is Animals post request'
//     })
// })

module.exports = router;