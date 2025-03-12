const express = require('express');
const {getAllBooks, getSingelBookByID, addNewBook, updateBook, deleteBook} = require('../controllers/book-controller')

//create express router
const router = express.Router()

//all routes realted to books only
router.get('/get', getAllBooks)
router.get('/get/:id', getSingelBookByID)
router.post('/add', addNewBook)
router.put('/update/:id',updateBook)
router.delete('/delete/:id', deleteBook)

module.exports = router;