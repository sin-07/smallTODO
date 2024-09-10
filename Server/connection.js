const mongoose = require('mongoose');
require('dotenv').config();



const connectDb= async()=>{

    const connection = await mongoose.connect(process.env.MONGO_URI);
    if(connection){
        console.log('Database connected');
    }else{
        console.log('Database not connected');
    }
}

module.exports = {connectDb};