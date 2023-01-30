const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res) => {
    console.log('User hit the server');

    console.log('Preparing response...');
    console.log('Setting up response headers...');
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.setHeader('statusCode', 200);
    res.setHeader('statusMessage', 'OK');
    res.setHeader('content-type', 'text/html')
    res.setHeader('customHeader', 'more info');

    console.log('Sending data to user...');
    res.write(`<h1>${req.url}</h1>`);
    console.log('Data sent...');

    res.end();
    console.log('Response end');
    console.log('============');
});

server.listen(PORT);
console.log(`Listening on Port ${PORT}...`);


// const http = require('http')

// const server = http.createServer((req, res) => {

//     if (req.url === '/') {
//         res.write('Welcome');
//     } else if (req.url === '/about') {
//         res.write('About Page');
//     } else {
//         res.write(`
//         <h1>Oops!</h1>
//         <p> Looks like you are lost... </p>
//         <a href="/">Go back to the homepage</a>
//         `);
//     }

//     res.end();
// })


// server.listen(1025)
// console.log('listening on port 1025...')
