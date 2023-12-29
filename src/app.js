import cookieParser from "cookie-parser";
import express  from "express";

const app = express();

app.use(cors())

app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())

export {app};