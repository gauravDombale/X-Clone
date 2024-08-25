import express from 'express';
import authRoutes from './routes/auth.routes.js';

const app = express();

//! to create a middleware
app.use("/api/auth", authRoutes)

app.listen(8000, ()=>{
    console.log('Server is running on port 8000');
})