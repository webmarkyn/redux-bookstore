import React from 'react';
import PropTypes from 'prop-types';
import './book.css';

const Book = ({ book, removeBook }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td><button type="button" onClick={() => removeBook(book)}>Remove</button></td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
