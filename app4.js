const os =require('os')
const user=os.userInfo()
console.log(user)
console.log(`the system uptime is the ${os.uptime() } second`  )
const x=os.uptime()