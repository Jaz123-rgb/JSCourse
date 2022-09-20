const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("im a test");
});


app.get('api/users', (req, res)=>{
    res.send(['Grover', 'Luis', 'Ana']);
});

app.get('api/users/:year/:mon', (req, res)=>{
    res.send(req.query);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {

    console.log("lsiten in the port", port);
});
