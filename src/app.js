import cookieParser from "cookie-parser";
import express  from "express";
import cors from "cors";

const app = express();

app.use(cors())

app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())


// routes import
import userRouter from "./routes/user.route.js"


// routes declaration
app.use("/api/v1/users" , userRouter)

export {app};