import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'

import bookRoutes from './routes/booksRoutes.js'

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/api', bookRoutes)

const CONNECTION_URL = 'mongodb+srv://mikolaszko:OXcfzsMdq8S3s2uC@cluster0.df0ifiz.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 5000;

app.get('/', (req,res) => {
    res.render('App.tsx')
})

mongoose.connect(CONNECTION_URL)
    .then(()=>app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)))
    .catch((error)=> console.log(`${error} did not connect`)) 
