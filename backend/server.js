import express from 'express';
import authRoutes from './routes/auth.routes.js';
import dotenv from 'dotenv';
import connectMongoDB from './db/connectMongoDB.js';

//! this function will read the .env file 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


//! to create a middleware
app.use("/api/auth", authRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
})