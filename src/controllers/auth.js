import * as services from "../services"
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