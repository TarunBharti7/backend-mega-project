// this method is used with common js
// require('dotenv').config({path: './env'});

// this method is used with module js
import dotenv from "dotenv";
dotenv.config({
    path: './env'
})
import connectDB from "./db/index.js";




connectDB();

