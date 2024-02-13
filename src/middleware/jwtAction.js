import jwt from "jsonwebtoken"

export const createJwt = (data) =>{
    let key = process.env.JWT_SECRET;
    let token = jwt.sign(data, key);
    return token;
}

export const verifyToken = (token) => {
    try {
        return jwt.verify(token,'process.env.JWT_SECRET');
    } catch (error) {
        return null;
    }
}

