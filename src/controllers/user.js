import * as services from "../services"
export const getUser = async (req,res) => {
    try{
        var users = await  services.getUser();
        return res.json(users)
    }catch (error){
        return res.status(400).json(error)
    }
}
