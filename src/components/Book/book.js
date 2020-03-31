import React from 'react';
import PropTypes from 'prop-types';
import './book.css';

const Book = ({ book, removeBook }) => (
  <div className="book">
    <div className="main-info">
      <p className="category">{book.category}</p>
      <h2 className="title">{book.title}</h2>
      <p className="author">Book author</p>
      <div className="book-controls">
        <button type="button" className="book-controls-btn">Comments</button>
        <button type="button" className="book-controls-btn" onClick={() => removeBook(book)}>Remove</button>
        <button type="button" className="book-controls-btn">Edit</button>
      </div>
    </div>
  </div>
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
