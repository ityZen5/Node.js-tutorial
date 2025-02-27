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
        // const newUser = await User.create({
        //     name: 'John Doe',
        //     email: 'johndoe1@gmail.com',
        //     age: '29',
        //     isActive: true,
        //     tags: ['businessman', 'developer', 'problem-solver'],
        // })

         //create a new document -> Method 2
        //  const newUser = new User({
        //     name: 'Nayanathara Raghavan',
        //     email: 'nayan@gmail.com',
        //     age: '105',
        //     isActive: true,
        //     tags: ['engineer', 'developer', 'problem-solver'],
        // })

        // await newUser.save();

      //console.log('Created a new User ', newUser);

        //get all users
        // const allUsers = await User.find({});
        // console.log(allUsers);

        // //getting specific requirements
        // const getUserActiveFalse = await User.find({isActive : true})
        // console.log(getUserActiveFalse,);
        
        //getting the first user with specific requirements
        const getJohnDoeFirst = await User.findOne({name: "John Doe"})
        console.log(getJohnDoeFirst);
        
        
    } catch (error) {
        console.log('Error -> ',error)
    }
    finally{
        await mongoose.connection.close();
    }
}

runQueryExamples();