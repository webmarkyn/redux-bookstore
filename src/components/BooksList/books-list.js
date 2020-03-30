import React from 'react';
import './books-list.css';
import Book from '../Book';

const BooksList = () => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <Book />
    </tbody>
  </table>
);

export default BooksList;
