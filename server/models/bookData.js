import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    selectedFile: String
})

let BookData = mongoose.model('BookData', bookSchema)

export default BookData