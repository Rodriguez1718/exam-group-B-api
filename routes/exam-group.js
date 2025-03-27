const express = require('express');  
const router = express.Router();  

router.get('/', (req, res) => {  
  res.json({ "message": "Group B API" });
});  

//GET / exams endpoint
router.get('/exams', (req, res) => {  
const exams = [
  { id: 1, name: "Math Exam", date: "2023-10-01" },  
  { id: 2, name: "Math Exam", date: "2023-10-01" }, 
  { id: 3, name: "Math Exam", date: "2023-10-01" }
];
res.json(exams);
});

//POST / exams endpoint
router.post('/', (req, res) => {  
    const { name,date } = req.body
    const newExam = {id: exams.length + 1, name, date}  
    exams.push(newExam);  
    res.status(201).send(newExam); // 201 Created status code  
});  



module.exports = router;  