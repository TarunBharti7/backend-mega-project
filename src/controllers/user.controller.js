import { asyncHandlers } from "../utils/asyncHandlers.js";
import {ApiError} from "../utils/ApiError.js"
import {user} from "../models/user.model.js"


const registerUser = asyncHandlers(async (req, res) => {
    // get user detail from frontend
    const {fullname , email , username , password} = req.body
    console.log("email : ", email );

    // validation - not empty
    if (
        [fullname, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }
    
    // check if user already exist : username , email
    // check for image , check for avatar
    // upload them to cloudinary , avator
    // create user object - create entry in db 
    // remove password and refresh token field from response 
    // check for user creation
    // return res

    
}) 

export {registerUser}