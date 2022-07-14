import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from '../../constants/actionTypes';

export default (books = [], action: any) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return books.map((book) =>
        book['_id'] === action.payload._id ? action.payload : book
      );
    case CREATE:
      return [...books, action.payload];
    default:
      return books;
  }
};
