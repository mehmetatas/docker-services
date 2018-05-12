const http = require('http');

http.createServer((req, res) => {
    res.write("This is image service");
    res.end();
}).listen(8080);
