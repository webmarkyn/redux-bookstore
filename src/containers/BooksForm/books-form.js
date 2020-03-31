import React from 'react';

import './books-form.css';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <div className="books-form">
    <form>
      <input type="text" placeholder="Title" />
      <select name="category" id="category">
        {categories.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
      </select>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default BooksForm;
