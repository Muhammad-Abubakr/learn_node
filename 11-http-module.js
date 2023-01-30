const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('Welcome');
    } else if (req.url === '/about') {
        res.write('About Page');
    } else {
        res.write(`
        <h1>Oops!</h1>
        <p> Looks like you are lost... </p>
        <a href="/">Go back to the homepage</a>
        `);
    }

    res.end();
})


server.listen(1025)
console.log('listening on port 1025...')
