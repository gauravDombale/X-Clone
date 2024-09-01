import express from 'express';
import authRoutes from './routes/auth.routes.js';
import dotenv from 'dotenv';
import connectMongoDB from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser';

//! this function will read the .env file 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); //? this is a middleware that will parse req.body which will be coming from user
app.use(express.urlencoded({extended: true})); //* this is a middleware that will parse req.body which will be coming from user

app.use(cookieParser()); //? this is a middleware that will parse the cookies that will be coming from the user

//! to create a middleware
app.use("/api/auth", authRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
})