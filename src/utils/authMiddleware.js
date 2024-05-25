import { JwtService } from "../services/bcryptServices.js";


const jwtService = new JwtService();

export const authVerify = (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization.split(' ')[1]
    const isVerify = jwtService.verifyToken(token);
    if (!isVerify) {
        res.status(401).json({ message: "Token is invalid" })
        return false
    }
    next()
}