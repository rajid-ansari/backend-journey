import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res, next) => {
    res.send("Server is Listning !!!")
})
app.get("/ig", (req, res, next) => {
    res.send("personal INSTAGRAM    !!!")
})

app.use(cookieParser());

export default app