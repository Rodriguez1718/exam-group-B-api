const express = require('express');  
const router = express.Router();  

router.get('/', (req, res) => {  
  res.json({ "message": "Group <your_group> API" }); // Replace <your_group>  
});  

module.exports = router;  