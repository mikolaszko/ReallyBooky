import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    selectedFile: {
        type: String,
        required: true
    }
})

let BookData = mongoose.model('BookData', bookSchema)

export default BookData