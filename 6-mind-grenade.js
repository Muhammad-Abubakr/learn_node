// When requiring commonJS wraps the require function around the code in the file
// but before that it executes each line of code and if in the file we invoke a fn.
// commonJS will also invoke that function while requiring

const num0 = 0;
const numa = 1;

function addValue() {
    console.log(`The sum is : ${num0 + numa}`)
}

addValue()