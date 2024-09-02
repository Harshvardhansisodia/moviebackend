import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";
import movieroutes from "./routes/movieRoute.js";

const app = express()
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("Connected!!")
    app.listen(PORT,()=>{
        console.log("Connected! And Server Running On Port"+PORT)
    })

}).catch(error => console.log(error));

app.use("/api",route);
app.use("/movie",movieroutes);
