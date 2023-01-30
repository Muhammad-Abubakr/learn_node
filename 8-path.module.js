const path = require('path')

console.log(path.sep)
console.log(path.join())

const filepath = path.join('/content', 'subfolder', 'test.txt')

console.log(filepath)

const base = path.basename(filepath)

console.log(base)

const parent_directory = path.dirname(filepath)

console.log(parent_directory);

const extension = path.extname(filepath)

console.log(extension);

const abs_path = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(abs_path);