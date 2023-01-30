const http = require('http');
const { createReadStream, readFileSync } = require('fs');

// default chunk size - 64kb
// options
// highWaterMark - set custom chunk size
// encoding - utf-8

// const server = http.createServer();
// const stream = createReadStream('./content/big.txt', { highWaterMark: 65536, encoding: 'utf-8' });


// sending file as a whole document
// server.on('request', (req, res) => {

//     const text = readFileSync('./content/big.txt', { encoding: 'utf-8' });

//     res.end(text)
// })

/* Sending file in chunks/fragments */
const server = http.createServer((req, res) => {

    const stream = createReadStream('./content/big.txt', { highWaterMark: 65536, encoding: 'utf-8' });

    stream.on('open', () => {
        stream.pipe(res)
    });

    stream.on('err', (err) => {
        res.end(err)
    })
})

server.listen(5005)
