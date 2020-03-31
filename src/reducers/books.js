import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const booksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case CREATE_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== payload);
    default:
      return state;
  }
};

export default booksReducer;
