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
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to my Book store api"
    })
})

//get all books
app.get('/get', (req, res) => {
    res.json(books)
})

//get a single book
app.get('/get/:id', (req, res) => {
    const book = books.find((item) => item.id == req.params.id);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({
            message: "Book not found! Try with a different Book ID"
        })
    }
})

//add a new book
app.post('/add', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: `Book ${books.length + 1}`
    }

    books.push(newBook);
    res.status(200).json({
        data: newBook,
        message: "New Book is added successfully"
    })
})

//update a book
app.put('/update/:id', (req, res) => {
    const findBook = books.find((bookItem) => bookItem.id === req.params.id);
    if (findBook) {
        findBook.title = req.body.title || findBook.title

        res.status(200).json({
            message: `Book with ID ${req.params.id} updated successfully`,
            data: findBook
        })
    } else {
        res.status(404).json({
            message: `Book with ID ${req.params.id} not found`
        })
    }
})

//delete a book
app.delete('/delete/:id', (req, res) =>{
    const findIndexOfCurrentBook = books.findIndex((item )=> item.id == req.params.id);
    if(findIndexOfCurrentBook !== -1){
        const deletedBook = books.splice(findIndexOfCurrentBook, 1);
        res.status(200).json({
            message : `Book deleted successfully`,
            data : deletedBook[0]
        })
    }else {
        res.status(404).json({
            message: `Book with ID ${req.params.id} not found`
        })
    }       
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})