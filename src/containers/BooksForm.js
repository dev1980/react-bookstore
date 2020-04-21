import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions/index';

const { createBook } = actions;

class BooksForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  reset() {
    this.setState({
      title: '',
      category: null,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createBook } = this.props;
    const { title, category } = this.state;
    const book = {
      id: Math.floor(Math.random() * 1000),
      title,
      category,
    };

    createBook(book);
    this.reset();
  }

  render() {
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" name="title" onChange={this.handleChange} />
        <select name="category" onChange={this.handleChange}>
          <option disabled selected>
            Please Select Category
          </option>
          {categories.map(category => (
            <option value={category} key={Math.random() * 5}>
              {category}
            </option>
          ))}
        </select>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func,
};

BooksForm.defaultProps = {
  createBook: () => null,
};

export default connect(null, mapDispatchToProps)(BooksForm);
