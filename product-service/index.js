const http = require('http');

http.createServer((req, res) => {
    res.write("This is product service");
    res.end();
}).listen(80);
