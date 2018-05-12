const http = require('http');

http.createServer((req, res) => {
    res.write("This is user service");
    res.end();
}).listen(80);
