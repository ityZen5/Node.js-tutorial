const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://username:password@cluster0.h9kdt.mongodb.net/")
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
            name: 'Maria Doe',
            email: 'mariadoe1@gmail.com',
            age: '49',
            isActive: true,
            tags: ['businessman', 'developer', 'problem-solver'],
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

        //get all users
        // const allUsers = await User.find({});
        // console.log(allUsers);

        // //getting specific requirements
        // const getUserActiveFalse = await User.find({isActive : true})
        // console.log(getUserActiveFalse,);
        
        // //getting the first user with specific requirements
        // const getJohnDoeFirst = await User.findOne({name: "John Doe"})
        //console.log(getJohnDoeFirst);

        // //get last created user by id
        // const getLastCreatedUserById = await User.findById(newUser._id);
        // console.log(getLastCreatedUserById, "getLastCreatedUserById");
        
        // //get selected fields
        // const selectedFields = await User.find().select('name email -_id') //- removes id
        // console.log(selectedFields);

        // //get limitede user
        // const limitedUsers = await User.find().limit(5).skip(1); //gets 5 users but skips 1st

        // //soretd users
        // const sortedUsersByAge = await User.find().sort({age : -1}); //sorting in descending order
        // console.log(sortedUsersByAge)

        // //count the number of documents we have
        // const countFalseDocument = await User.countDocuments({isActive : true})
        // console.log(countFalseDocument);

        // //delete user
        // const deletedUser = await User.findByIdAndDelete(newUser._id);
        // console.log('User deleted ->' , deletedUser);
        
        // //update user
        // const updateUser = await User.findByIdAndUpdate(newUser._id, {
        //     $set : {age : 200}, $push : {tags: 'updated'}
        // },{new : true});
        // console.log("updated user" , updateUser);
        
                
    } catch (error) {
        console.log('Error -> ',error)
    }
    finally{
        await mongoose.connection.close();
    }
}

runQueryExamples();
