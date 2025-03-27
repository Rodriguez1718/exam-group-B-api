const express = require('express');  
const router = express.Router();  
// Initial exams data  
const exams = [  
  { id: 1, name: "Math Exam 1", date: "2023-10-01" },  
  { id: 2, name: "Math Exam 2", date: "2023-10-02" },   
  { id: 3, name: "Math Exam 3", date: "2023-10-03" }  
];  

// GET / endpoint  
router.get('/', (req, res) => {  
  res.json({ "message": "Group B API" });  
});  

// GET /exams endpoint  
router.get('/exams', (req, res) => {  
  res.json(exams);  
});  

// POST /exams endpoint  
router.post('/exams', (req, res) => {  
    const { name, date } = req.body;  

    if (!name || !date) {  
        return res.status(400).send({ error: "Name and date are required" });  
    }  

    const newExam = { id: exams.length + 1, name, date };  
    exams.push(newExam);  
    res.status(201).send(newExam); 
});  

// PUT /exams/:id endpoint 
router.put('/exams/:id', (req, res) => {  
    const examId = parseInt(req.params.id);  
    const examToUpdate = exams.find(e => e.id === examId);  
    
    if (!examToUpdate) {  
        return res.status(404).json({ message: "Exam not found" });  
    }  


    examToUpdate.name = req.body.name || examToUpdate.name;  
    examToUpdate.date = req.body.date || examToUpdate.date;  

    res.json(examToUpdate);  
});  
module.exports = router;