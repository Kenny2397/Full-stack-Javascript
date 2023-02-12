// const bcrypt = require('bcrypt')
import bcrypt from 'bcrypt'

const password = '1234password!'
const saltRounds = 10

async function HashPassword(password, saltRounds){
  try{
    const pwdHash = await bcrypt.hash(password, saltRounds)
    console.log(`pwdHash: ${pwdHash}`)
    return pwdHash
  }catch(err){
    console.error(err)
  }
  
}
(async () => {
  const passwordHashed = await HashPassword(password, saltRounds)
  console.log(passwordHashed)
})()
