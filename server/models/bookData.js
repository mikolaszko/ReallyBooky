import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    selectedFile: String
})

let BookData = mongoose.model('BookData', bookSchema)

export default BookData