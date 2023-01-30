const { readFileSync, writeFileSync } = require('fs');


const first_content = readFileSync('./content/first.txt', 'utf-8');
const second_content = readFileSync('./content/second.txt', 'utf-8');

console.log(first_content, '\n', second_content);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first_content}, ${second_content}\n`,
    { flag: 'a' }
);