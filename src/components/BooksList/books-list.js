import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './books-list.css';
import Book from '../Book';
import CategoryFilter from '../categoryFilter';
import { removeBook } from '../../actions';

const BooksList = ({ books, removeBook, filter }) => {
  const filteredBooks = !filter ? books : books.filter(
    book => book.category === filter,
  );

  return (
    <div className="booksList">
      <CategoryFilter />
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
          { filteredBooks.map(book => <Book key={book.id} book={book} removeBook={removeBook} />) }
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });
const mapDispatchToProps = { removeBook };

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
