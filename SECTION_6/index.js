const http = require("http");

const server = http.createServer((req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;

    res.end('Hello, This is Nodejs http server!');
});

server.listen(3000, () => {
    console.log("Server is up and running on port 3000");
});