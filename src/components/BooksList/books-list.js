import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './books-list.css';
import Book from '../Book';
import CategoryFilter from '../categoryFilter';

const BooksList = ({ books, filter }) => {
  const filteredBooks = filter === 'All' ? books : books.filter(
    book => book.category === filter
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
          </tr>
        </thead>
        <tbody>
          { filteredBooks.map(book => <Book key={book.id} book={book} />) }
        </tbody>
      </table>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

export default connect(mapStateToProps)(BooksList);
