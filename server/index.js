import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extend: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extend: true }));
app.use(cors());

// mongoDB cloud atlas hosting

const CONNECTION_URL = "mongodb+srv://fansters:Tevpaliks2277@cluster0.r5srzwz.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).
then(()=> app.listen(PORT, ()=> console.log(`Server running in port: ${PORT}`))).catch((error)=> console.log(error.message));

// text