const http = require('http');

http.createServer((req, res) => {
    res.write("This is seller service");
    res.end();
}).listen(80);
