import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import {User} from "../models/user.models.js"

export const verifyJWT = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        if(!token){
            return next(new ApiError(401, "unauthorized request"))
        }
        const decodedTokenInfo = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedTokenInfo?._id).select(
            "-password -refreshToken"
        )
        if(!user){
            return next(new ApiError(401, "invalid access token"))
        }
        req.user = user;
        next()
    } catch (error) {
         next(new ApiError(401, error?.message || "Invalid Access Token"))
    }
} 