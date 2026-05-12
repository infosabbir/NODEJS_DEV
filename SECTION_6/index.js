const http = require("http");

const server = http.createServer();

const products = [{ name: 'banana' }, { name: 'apple' }, { name: 'orange' }];

function parse(req) {
    return new Promise((reslove, reject) => {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                reslove({ name: body.replace("productName=", "") });
            } catch (err) {
                reject(err);
            }
        });
    });
}

server.on('request', (req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <form action="/products" method="POST">
            <input type="text" name="productName"/>
            <button type="submit">Post</button>
            </form>
            `);
    } else if (req.url === '/products') {
        if (req.method == "POST") {
            parse(req).then(product => {
                products.push(product);

                res.end(`Product created!\n
                    ${JSON.stringify(products)}
                    `);
            });
        } else if (req.method === 'GET') {
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