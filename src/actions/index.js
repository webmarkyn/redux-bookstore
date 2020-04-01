export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'UPDATE_FILTER';

export const createBook = book => ({ type: CREATE_BOOK, payload: book });
export const removeBook = book => ({ type: REMOVE_BOOK, payload: book.id });
export const changeFilter = value => ({ type: CHANGE_FILTER, payload: value });
