const express=require('express');
const router= express.Router();
const Student= require('../model/student');
const mongoose=require('mongoose');
const student = require('../model/student');

// router.get('/',(req,res,next)=>{
//     res.status(200).json({
//         msg: 'this is student get request'
//     })
// })

//fetching all student records
router.get('/',(req,res,next)=>{
    Student.find()
    .then(result=>{
        res.status(200).json({
            studentData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    })
})

//to get data by sending particular id within url
router.get('/:id',(req,res,next)=>{
    //console.log(req.params.id);
    student.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            student:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    })
})

//post request
router.post('/',(req,res,next)=>{
    // console.log(req.body);
    //inserting data into mongodb
    const student = new Student({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        gender:req.body.gender
    })

    student.save()
    .then(result=>{
        //console.log(result);
        res.status(200).json({
            newStudent:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

//delete request with id
router.delete('/:id',(req,res,next)=>{
    Student.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message:'Student deleted sucessfully',
            delStudent:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


//put request
router.put('/:id',(req,res,next)=>{
    console.log()
    Student.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            gender:req.body.gender
        }
    })
    .then(result=>{
        res.status(200).json({
            updatedStudent:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})



module.exports = router;