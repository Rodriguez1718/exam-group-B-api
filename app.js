const express = require('express');  
const app = express();  
const port = process.env.PORT || 3000;  
app.use(express.json());

// Import routes  
const examGroupRoute = require('./routes/exam-group');  

// Use routes  
app.use('/exam-group', examGroupRoute);  

app.listen(port, () => {  
  console.log(`Server listening on port ${port}`);  
});  