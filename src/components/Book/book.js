import React from 'react';

import './book.css';

const Book = book => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

export default Book;
