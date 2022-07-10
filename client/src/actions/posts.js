import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'

import * as api from '../api/index.js'

export const getBooks = () => async (dispatch) => {
    try {
      const { data } = await api.getBooks();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const addBook = (book) => async (dispatch) => {
    try {
      const { data } = await api.addBook(book);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
//   export const updatePost = (id, post) => async (dispatch) => {
//     try {
//       const { data } = await api.updatePost(id, post);
  
//       dispatch({ type: UPDATE, payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
  
//   export const likePost = (id) => async (dispatch) => {
//     try {
//       const { data } = await api.likePost(id);
  
//       dispatch({ type: LIKE, payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
  
//   export const deletePost = (id) => async (dispatch) => {
//     try {
//       await api.deletePost(id);
  
//       dispatch({ type: DELETE, payload: id });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };