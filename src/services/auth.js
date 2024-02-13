import db from "../models"
import bcrypt from 'bcryptjs'
import * as mdw from "../middleware";

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

export const login = (email, password) => new Promise(async (resolve, reject) => {
    try {
        const user = await db.User.findOne({
            where: { email: email }
        });
        if(user && bcrypt.compareSync(password,user.password)){
            var token = mdw.createJwt(user.toJSON());
            resolve({
                status: true,
                message: 'Đăng nhập thành công',
                token : token,
            })
        }
        resolve({
            'status': false,
            'message': 'Email hoặc mật khẩu không đúng',
        })
    } catch (error) {
        reject(error)
    }
})