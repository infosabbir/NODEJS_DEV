const http = require("http");

const server = http.createServer();

server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'plain/text');

    if (req.method === 'GET') {
        res.statusCode = 200;
        res.end('Hello, This is Nodejs HTTP server - Get request handled!');
    } else {
        res.statusCode = 405;
        res.end('Method not Allowed');
    }

})

server.listen(3000, () => {
    console.log("Server is up and running on port 3000");
});