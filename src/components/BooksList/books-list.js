import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './books-list.css';
import Book from '../Book';
import { removeBook } from '../../actions';

const BooksList = ({ books, removeBook }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      { books.map(book => <Book key={book.id} book={book} removeBook={removeBook} />) }
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = { removeBook };

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
