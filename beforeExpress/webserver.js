const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3333;


// create server takes requestListener function
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Response result of hello');
});


// listen port
server.listen(port, hostname, () => {
    console.log('Server is running now');
});

