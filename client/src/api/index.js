import axios from 'axios';

const url = 'http://localhost:5000/api';

export const getBook = () => axios.get(url);
export const addBook = (newBook) => axios.post(url, newBook);
