import React from 'react';
import BooksList from '../BooksList';
import BooksForm from '../BooksForm';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const App = () => (
  <div>
    <BooksForm categories={categories} />
    <BooksList categories={categories} />
  </div>
);

export default App;
