import React from 'react';
import CategoriesContext from '../../context/categoriesContext';

const withCategories = Component => props => (
  <CategoriesContext.Consumer>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    {categories => <Component {...props} categories={categories} />}
  </CategoriesContext.Consumer>
);


export default withCategories;
