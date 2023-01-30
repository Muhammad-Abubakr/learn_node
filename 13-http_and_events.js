const http = require('http');

/* 
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


Instead of passing the callback to the createServer function we use the server
object created from createServer function and set the event handler on that object

*/
const server = http.createServer();

server.listen(5000);
console.log('Listening on Port 5000...');

/* 
Http receives following events
    on(event: 'close',)
    on(event: 'connection',)
    on(event: 'error',)
    on(event: 'listening',) 
    on(event: 'checkContinue',) 
    on(event: 'checkExpectation',)
    on(event: 'clientError',)
    on(event: 'connect',)
    on(event: 'request',)
    on(event: 'upgrade',)
*/
server.on('request', (req, res) => {
    res.end(req.url);
})
