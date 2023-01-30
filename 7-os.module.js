const os = require('os');

//* info about current user
const user = os.userInfo();

console.log(user)

//* method returns systems uptime in seconds
console.log(`Sytems' uptime is: ${(os.uptime().toFixed() / 3600).toFixed()}h`)

// * info about the current Operating system
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: `${(os.totalmem() / (10 ** 6)).toFixed()} MB`,
    freeMem: `${(os.freemem() / (10 ** 6)).toFixed()} MB`,
    platform: os.platform(),
    arch: os.arch(),
}

console.log(currentOS)