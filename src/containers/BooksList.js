import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import actions from '../actions/index';

const { removeBook } = actions;

const BookList = ({
  books, filter, removeBook,
}) => {
  const handleRemoveBook = book => removeBook(book);

  const bookCategory = filter === 'Category' ? books : books.filter(book => book.category === filter);

  const showBooks = bookCategory.length > 0 ? (bookCategory.map(book => (
    <Book book={book} key={Math.random() * 30} removeBook={handleRemoveBook} />
  ))) : null;

  return (
    <div>
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
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func,
  filter: PropTypes.string.isRequired,
};

BookList.defaultProps = {
  removeBook: () => null,
};

const mapDisptachToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

const mapStateToProps = ({ booksReducer: { books }, filter }) => ({
  books,
  filter,
});

export default connect(mapStateToProps, mapDisptachToProps)(BookList);
