const http = require("http");

const server = http.createServer();

const products = [{ name: 'banana' }, { name: 'apple' }, { name: 'orange' }];

server.on('request', (req, res) => {
    console.log(req.url);
    if (req.url === '/products') {
        if (req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify(products));
        } else {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 405;
            res.end('Method not Allowed');
        }
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;
        res.end('Page Not Fount');
    }

});

server.listen(3000, () => {
    console.log("Server is up and running on port 3000");
});