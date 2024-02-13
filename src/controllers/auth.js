import * as services from "../services"
import * as mdw from "../middleware"
import e from "express";
export const register = async (req,res) => {
    try{
        const {email,password}  = req.body
        if(!email || !password){
            return res.status(400).json({
                error: 1,
                mes: 'Missing payloads'
            })
        }
        const data = await services.register(email,password)
        return res.json({
            result : data
        })
    }catch (error){
        return res.status(500).json(error)
    }
}
export const login = async (req,res) => {
    try{
        const {email,password}  = req.body

        if(!email || !password){
            return res.status(400).json({
                error: 1,
                mes: 'Vui lòng điền đầy đủ thông tin đăng nhập'
            })
        }
        const data = await services.login(email,password)
        if(data.status){
            return res.json(data)
        }else{
            return res.status(400).json(data);
        }

    }catch (error){
        console.log(error);
        return res.status(500).json(error)
    }
}