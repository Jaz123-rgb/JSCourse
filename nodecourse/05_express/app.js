const express = require('express');
const app = express();


const users = [
    {id:1, name:"Jaz"},
    {id:2, name:"Luis"},
    {id:3, name:"Marth"}

];


app.get('/', (req, res) => {
    res.send("im a test");
});


app.get('api/users', (req, res)=>{
    res.send(['Grover', 'Luis', 'Ana']);
});

//Send a id to prove what tyoe of http req use 
app.get('api/users/:id', (req, res)=>{
   let user = users.find(u => u.id === parseInt(req.params.id)); 
   if(!user) res.status(404).send('the user can be chatch');
    res.send(user)
});


const port = process.env.PORT || 3000;

app.listen(port, () => {

    console.log("lsiten in the port", port);
});
