const { exec, spawn } = require('child_process')


// exec('ls -la', (err, stdout, stderr) => {
//   if(err) {
//     console.error(`error:${err}`)
//     return
//   }

//   console.log(`stdout: ${stdout}`)
//   console.log(`stderr: ${stderr}`)
  
// })

let proceso = spawn('ls', ['-la'])
console.log(proceso.pid)
try {
  proceso.stdout.on('data', (data) => {
    try{
      console.log(data.toString())
    }
    catch (err) {
      console.log(`error:${err}`)
    }
  })
}catch (err) {
  console.log(`error:${err}`)
}


