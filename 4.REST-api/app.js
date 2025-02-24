const express = require('express');
const app = express();  

//Middleware
app.use(express.json())

let books = [
    {
        id: '1', 
        title: 'Book 1'
    },
    {
        id: '2', 
        title: 'Book 2'
    },
    {
        id: '3', 
        title: 'Book 3'
    }
]

//intro route
app.get('/', (req, res) =>{
    res.json({
        message : "Welcome to my Book store api"
    })
})

//get all books
app.get('/get', (req, res) =>{
    res.json(books)
})

//get a single book
app.get('/get/:id', (req, res) =>{
    const book = books.find((item) => item.id == req.params.id);
    if(book){
        res.status(200).json(book);
    }else{
        res.status(404).json({
            message : "Book not found! Try with a different Book ID"
        })
    }
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})