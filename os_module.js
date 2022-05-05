const os =require('os')
const user=os.userInfo()
console.log(user)
console.log(`the system uptime is the ${os.uptime() } second`  )
const x=os.uptime()
if (x>0){
    const hour=Math.floor(x/3600)
    const rem=x-hour*3600;
    const min=Math.floor(rem/60);
    const second=rem-min*60;
    console.log(`The total up time of  the system is :${hour} hour:${min} minute:${second} second`)
}

const device={
    type:os.type(),
    release:os.release(),
    totalmemory:os.totalmem(),
    freemem:os.freemem(),
    platform:os.platform(),
    temdirectoraryL:os.tmpdir(),
    version:os.version(),
    networkinterference:os.networkInterfaces(),
    loadavg:os.loadavg(),
    homedir:os.homedir(),
    EOl:os.EOL,
    archeterecture:os.arch(), 
    cpus:os.cpus(),
    endannis:os.endianness(),
    hostname:os.hostname()
}
console.log(device)