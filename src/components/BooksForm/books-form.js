import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../../actions';

import './books-form.css';
import withCategories from '../HOC/withCategories';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const { title, category } = this.state;
    const { createBook } = this.props;
    e.preventDefault();
    createBook({ id: Math.floor(Math.random() * 10).toString(), title, category });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { title, category } = this.state;
    const { categories } = this.props;
    return (
      <div className="books-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Title" name="title" value={title} onChange={this.handleChange} />
          <select name="category" id="category" value={category} onChange={this.handleChange}>
            {categories.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(null, { createBook })(
  withCategories()(BooksForm),
);
