import db from "../models"
import bcrypt from 'bcryptjs'

const hashPassword = password =>bcrypt.hashSync(password,bcrypt.genSaltSync(8))
export const register = (email,password) => new Promise(async (resolve, reject)=>{
    try{
        const data = await db.User.findOrCreate({
            where: {email},
            defaults: {
                email,
                password:hashPassword(password)
            }
        })
        resolve({
            error : data[1] ? 0 :1,
            mes : data[1] ? 'Register is successfully' : 'Email is used'
        })
    }catch (error){
        reject(error)
    }
})