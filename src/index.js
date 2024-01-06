// this method is used with common js
// require('dotenv').config({path: './env'});

// this method is used with module js
import dotenv from "dotenv";
dotenv.config({
    path: './env'
})

// dotenv.config();
import connectDB from "./db/index.js";
import { app } from "./app.js";




connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log("Server is running at port ", process.env.PORT);
    })
})
.catch((err) => {
    console.log("mongodb connection failed" , err);
})

