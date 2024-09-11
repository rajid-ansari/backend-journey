import connectDB from "./db/index.js";
import dotenv from "dotenv"
import { SERVER_PORT } from "./constants.js";
import app from "./app.js";

dotenv.config()

connectDB();

app.listen(SERVER_PORT, () => {
    console.log("server is listning at", SERVER_PORT)
})

