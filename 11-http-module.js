const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res) => {
    console.log('User hit the server');

    console.log(`Host: ${req.headers.host}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`URL requested : ${req.url}`);

    console.log('Preparing response...');
    console.log('Setting up response headers...');
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.setHeader('statusCode', 200);
    res.setHeader('statusMessage', 'OK');
    res.setHeader('content-type', 'text/html') // mime-type, media-type
    res.setHeader('customHeader', 'more info');

    // Shorthand for status code and status message, with optional extra headers
    console.log('Sending data to user...');
    if (req.url != '/') {
        res.writeHead(404, 'Resource not found', { error: 'not found' })

        res.write(`<h1>Resource not found</h1>`);

    } else {
        res.writeHead(200, 'OK', { more: 'headers' })

        res.write(`<h1>${req.url}</h1>`);
    }
    console.log('Data sent...');


    res.end();
    console.log('Response end');
    console.log('============');
});

server.listen(PORT);
console.log(`Listening on Port ${PORT}...`);