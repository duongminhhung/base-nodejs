import db from "../models"

export const register = () => new Promise((resolve,reject)=>{
    try{
        resolve('data')
    }catch (error){
        reject(error)
    }
})