import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/database.js";
import { userRoute } from "./routes/route.js";
// import bodyParser from "body-parser"

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/v1/user", userRoute);

const PORT = process.env.PORT || 3000;


// app.use(express.json());
// app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT,() =>
{
    console.log(`Server listen at port ${PORT}`);
})