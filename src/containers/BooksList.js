import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import actions from '../actions/index';

const { removeBook } = actions;

const BookList = ({ books, removeBook }) => {
  const handleRemoveBook = book => removeBook(book);

  const showBooks = books.length > 0 ? (books.map(book => (
    <Book book={book} key={Math.random() * 30} removeBook={handleRemoveBook} />
  ))) : null;

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {showBooks}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func,
};

BookList.defaultProps = {
  removeBook: () => null,
};

const mapDisptachToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

const mapStateToProps = ({ booksReducer: { books } }) => ({
  books,
});

export default connect(mapStateToProps, mapDisptachToProps)(BookList);
