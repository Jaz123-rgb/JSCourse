
const {json} = require('express');
const express = require('express');
const Joi = require('@hapi/joi');
const {error} = require('@hapi/joi/lib/annotate');
const app = express();


app.use(express.json());

const users = [
    {id:1, name:'Jaz'},
    {id:2, name:'Luis'},
    {id:3, name:'Marth'}
 
];


app.get('/', (req, res) => {
    res.send("im a test");
});


app.get('/api/users', (req, res)=>{
    res.send(['Grover', 'Luis', 'Ana']);
});

//Send a id to prove what tyoe of http req use 
app.get('/api/users/:id', (req, res)=>{
   let user = users.find(u => u.id === parseInt(req.params.id)); 
   if(!user) res.status(404).send('the user can be chatch');
    res.send(user);
});

app.post('/api/users/', (req, res)=>{
     //ADD joi in to validate info


    const schema = Joi.object({
	name: Joi.string().min(3).required()
    });
   const {error, value}  =  schema.validate({name: req.body.name});
    if(!error){
	const user = {
	    id: users.length + 1,
	    name: value.name
	};
	users.push(user);
	res.send(user);
    }else{
	const notmesg = error.details[0].message;
	res.status(400).send(notmesg);

    }

    //ADD joi in to validate info

//create a auth easy
//    if (!req.body.name || req.body.name.length <= 2){
	//400 Bad Request
  //   res.status(400).send('Add a name, with a 3 letters like minus');
//	return;
    //}
//create a auth easy 
  //  const user = {
//	id: users.length + 1, 
//	name: req.body.name
    //}
   // users.push(user);
    // res.send(user);
});



const port = process.env.PORT || 3000;

app.listen(port, () => {

    console.log("lsiten in the port", port);
});
