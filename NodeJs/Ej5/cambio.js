const http = require('http');

const changeWord = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<!DOCTYPE html><html><head><title>Servidor NodeJs</title></head><body><h1>Hey</h1><p>Probando servidor.</p></body></html>');
});

const port = 3000;
changeWord.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}/`);
});