import * as services from "../services"
export const register = async (req,res) => {
    try{
        const data = await services.register()
        return res.json({
            result : data
        })
    }catch (error){
        return res.status(500).json(error)
    }
}