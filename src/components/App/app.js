import React from 'react';

import CategoriesContext from '../../context/categoriesContext';
import CategoryFilter from '../categoryFilter';
import BooksList from '../../containers/BooksList';
import BooksForm from '../../containers/BooksForm';
import './app.css';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const App = () => (
  <CategoriesContext.Provider value={categories}>
    <div className="main">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="left">
            <span className="logo">Bookstore CMS</span>
            <ul>
              <li><a href="/">Books</a></li>
              <li><CategoryFilter /></li>
            </ul>
          </div>
          <div className="right">
            <div className="profile">
              <i className="fa fa-user" aria-hidden="true" />
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  </CategoriesContext.Provider>
);

export default App;
