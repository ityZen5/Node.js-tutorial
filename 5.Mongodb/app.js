const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://bharathrm:yio9lZphbddNPDnR@cluster0.h9kdt.mongodb.net/")
    .then(() => console.log("database connected succefully"))
    .catch((e) => console.log(e)); 

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number, 
    isActive : Boolean, 
    tags : [String],
    createdAt : {type : Date, default : Date.now}
})

//create a userModel
const User = mongoose.model('User', userSchema)

async function runQueryExamples() {
    try {
        //create a new document -> Method 1
        const newUser = await User.create({
            name: 'Bharath Raghavan',
            email: 'bharathrm@gmail.com',
            age: '35',
            isActive: true,
            tags: ['engineer', 'developer', 'problem-solver'],
        })

         //create a new document -> Method 2
        //  const newUser = new User({
        //     name: 'Nayanathara Raghavan',
        //     email: 'nayan@gmail.com',
        //     age: '105',
        //     isActive: true,
        //     tags: ['engineer', 'developer', 'problem-solver'],
        // })

        // await newUser.save();

        console.log('Created a new User ', newUser);
        
    } catch (error) {
        console.log('Error -> ',error)
    }
    finally{
        await mongoose.connection.close();
    }
}

runQueryExamples();