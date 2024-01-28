import db from "../models"
export const getUser = () => new Promise(async (resolve, reject)=> {
    try{
       var users =  db.User.findAll({
           include: [{
               model: db.Role,
               attributes: ['name']
           }]
       });
       resolve(users)
    }catch (error){
        reject(error)
    }
})