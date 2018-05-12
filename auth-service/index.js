const http = require('http');

http.createServer((req, res) => {
    res.write("This is auth service");
    res.end();
}).listen(8080);
