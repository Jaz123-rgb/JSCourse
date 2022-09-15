//modulos http 
//
const http = require('http');

const server = http.createServer((req, res) => {
    if(req === '/'){
	res.write('it works');
	res.end();
    }
    if(req.url === '/api/productos'){
	res.write(JSON.stringify(['maouse', 'keyboard', 'speaker']));
	res.end();
    }

});

server.listen(3000);
