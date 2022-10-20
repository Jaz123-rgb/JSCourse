const express = require('express');

const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
 

//ROUTES 
app.use(require('./routes/index'));

app.listen(3000);
console.log('Server on port', 3000);
