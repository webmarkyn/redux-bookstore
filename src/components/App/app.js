import React from 'react';

import CategoriesContext from '../../context/categoriesContext';
import CategoryFilter from '../categoryFilter';
import BooksList from '../BooksList';
import BooksForm from '../BooksForm';
import './app.css';


const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const App = () => (
  <CategoriesContext.Provider value={categories}>
    <div class="main">
      <nav class="navbar">
        <div class="navbar-content">
          <div class="left">
            <span class="logo">Bookstore CMS</span>
            <ul>
              <li><a>Books</a></li>
              <li><CategoryFilter /></li>
            </ul>
          </div>
          <div class="right">
            <div class="profile">
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </nav>
      <div class="container">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  </CategoriesContext.Provider>
);

export default App;
