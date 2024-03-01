import express from 'express';
import mongoose from 'mongoose';
import {MONGODBURL} from './config.js'

const app = express();

const PORT=4000;
const message = 'Welcome to the server'

//Sending data to localhost
app.get('/',(req,res)=>{
    console.log(req);
    res.status(200).send(message);
})

mongoose.connect(MONGODBURL)
.then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT,()=>{
        console.log(`Server is listening to port ${PORT}`);
    })

    
}).catch((err) => {
    console.log(err);
    
});