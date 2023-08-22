
const express=require('express');
const cors=require('cors');
const connection = require('./db');
require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json());



app.listen(process.env.port || 8080, async()=>{
    try {
        await connection;
        console.log("db is connected");
        console.log("server is running")
        
    } catch (error) {
        console.log(error)
    }
})