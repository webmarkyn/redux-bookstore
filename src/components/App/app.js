import React from 'react';

import CategoriesContext from '../../context/categoriesContext';
import BooksList from '../BooksList';
import BooksForm from '../BooksForm';


const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const App = () => (
  <CategoriesContext.Provider value={categories}>
    <div>
      <BooksForm />
      <BooksList />
    </div>
  </CategoriesContext.Provider>
);

export default App;
