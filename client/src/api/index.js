import axios from "axios";

const url = 'http://localhost:3000/home';

export const fetchBook = () => axios.get(url);
export const addBook = (newBook) => axios.post(url, newBook);