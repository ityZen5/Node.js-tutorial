const Book = require('../models/book')

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({});
        if (allBooks?.length > 0) {
            res.status(200).json({
                success: true,
                message: 'List of books fetched successfully',
                data: allBooks
            })
        } else {
            res.status(404).json({
                success: false,
                message: 'Book not found'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}

const getSingelBookByID = async (req, res) => {
    try {
        const getCurrentBookID = req.params.id
        const bookDetailsByID = await Book.findById(getCurrentBookID);

        if(!bookDetailsByID){
            return res.status(404).json({
                success : false,
                message : 'Book not found'
            })
        }

        res.status(200).json({
            success : true,
            data : bookDetailsByID
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}

const addNewBook = async (req, res) => {
    try {
        const newBookFormData = req.body
        const newlyCreatedBook = await Book.create(newBookFormData)
        if (newBookFormData) {
            res.status(201).json({
                success: true,
                message: 'Book added successfuly',
                data: newlyCreatedBook
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}

const updateBook = async (req, res) => {
    try {
        const updatedBookFormData = req.body;
        const getCurrentBookID = req.params.id;
        const updatedBook = await Book.findByIdAndUpdate(
          getCurrentBookID,
          updatedBookFormData,
          {
            new: true,
          }
        );
    
        if (!updatedBook) {
          res.status(404).json({
            success: false,
            message: "Book is not found with this ID",
          });
        }
    
        res.status(200).json({
          success: true,
          message: "Book updated successfully",
          data: updatedBook,
        });
      } catch (e) {
        console.log(e);
        res.status(500).json({
          success: false,
          message: "Something went wrong! Please try again",
        });
      }
}

const deleteBook = async (req, res) => {
    try {
        const getCurrentBookID = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);
    
        if (!deletedBook) {
          res.status(404).json({
            success: false,
            message: "Book is not found with this ID",
          });
        }
    
        res.status(200).json({
          success: true,
          data: deletedBook,
        });
      } catch (e) {
        console.log(e);
        res.status(500).json({
          success: false,
          message: "Something went wrong! Please try again",
        });
      }
}

module.exports = {
    getAllBooks,
    getSingelBookByID,
    addNewBook,
    updateBook,
    deleteBook
}