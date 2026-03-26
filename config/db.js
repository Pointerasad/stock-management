const mongoose = require("mongoose");
const mongoUri = process.env.MONGO_URL;
//connect database 

const connectDB = async () =>{
   try{
    await mongoose.connect(mongoUri);
     console.log("Connected to database");
   }catch(err){
    console.log("Error connecting to database", err);
   }
};

module.exports = connectDB;