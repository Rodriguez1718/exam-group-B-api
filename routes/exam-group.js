const express = require('express');  
const router = express.Router();  

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
  
module.exports = router;  