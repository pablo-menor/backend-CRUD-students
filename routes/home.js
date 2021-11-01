const express = require('express');
const router = express.Router();
const Student = require('../models/student')

// Bring all students
router.get('/', async (req, res) =>{
    
    const students =  await Student.find();
    res.json(students); 
})

// Bring student by name
router.get('/:name', async (req, res)=>{
    const  studentByName = await Student.find({name: req.params.name}) 
    console.log(studentByName);
    res.json(studentByName);
   
})

// Save a student
router.post('/save', async (req, res) => {
    console.log(req.body);
    if (req.body.course === '') {
        req.body.course = '----';
    }
    const student = new Student({
        name: req.body.name,
        lastName: req.body.lastname,
        course: req.body.course
    });

    const savedStudent = await student.save();
    res.redirect(req.header('origin'))
})


router.delete('/:studentID', async(req, res) =>{
    try {
        console.log(req.params);
        const removedStudent = await Student.deleteOne({_id: req.params.studentID});
          res.send('deleted');
    } catch (error) {
        next(err)
    }
   
})

router.patch('/:studentID', async(req,res)=>{
    try {
        const updtedStudent = await Student.updateOne({_id:req.params.studentID}, {$set: req.body});
        res.send('updated');
    } catch (error) {
        next(err)
    }
})

module.exports = router;