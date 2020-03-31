import React from 'react';
import PropTypes from 'prop-types';

import './category-filter.css';

const CategoryFilter = ({ categories }) => (
  <select name="categories" id="categoriesFilter" defaultValue="All">
    <option value="All">All</option>
    {categories.map(cat => (<option value={cat} key={cat}>{cat}</option>))}
  </select>
);

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CategoryFilter;
