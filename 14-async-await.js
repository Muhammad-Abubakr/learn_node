const { readFile, writeFile } = require('fs').promises


// for (let index = 0; index < 100000; index++) {
//     writeFile('./content/big.txt', `Hello, Friend! ${index}\n`, { flag: 'a' })
// }

let start = Date.now();
readFile('./content/big.txt', 'utf-8').then((chunk) => {
    console.log(`${chunk} Promise`)
    console.log(`${(Date.now() - start).toFixed()}ms`)
})


start = Date.now();
const awaitedRead = async () => {
    const bigFile = await readFile('./content/big.txt', 'utf-8');

    console.log(`${bigFile} Async Await`)
    console.log(`${(Date.now() - start).toFixed()}ms`)
}

awaitedRead()

console.log('I am here')