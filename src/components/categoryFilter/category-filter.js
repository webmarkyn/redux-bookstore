import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withCategories from '../HOC/withCategories';
import { changeFilter } from '../../actions';
import './category-filter.css';

const CategoryFilter = ({ categories, changeFilter }) => {
  const handleChange = (e) => changeFilter(e.target.value);

  return (
    <select name="categories" id="categoriesFilter" defaultValue="All" onChange={handleChange}>
      <option value="All">All</option>
      {categories.map(cat => (<option value={cat} key={cat}>{cat}</option>))}
    </select>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = { changeFilter };

export default connect(null, mapDispatchToProps)(withCategories(CategoryFilter));
