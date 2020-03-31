import React from 'react';
import CategoriesContext from '../../context/categoriesContext';

const withCategories = () => Wrapped => (...props) => (
  <CategoriesContext.Consumer>
    {
      categories => <Wrapped {...props} categories={categories} />
    }
  </CategoriesContext.Consumer>
);

export default withCategories;
