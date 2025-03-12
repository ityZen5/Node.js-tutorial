const mongoose = require('mongoose'); 

const connectToDB = async()=>{
    try {
        await mongoose.connect('mongodb+srv://bharathrmofficial:0k7dAwdlW4OYrqWd@cluster0.3yt0d.mongodb.net/');
        console.log("MongoDb is connected successfully");
        
    } catch (error) {
        console.log("MongoDB connection failed", error);
        process.exit(1);
        
    }
}

module.exports = connectToDB