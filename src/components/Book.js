import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <tr>
    <td className="book-category">{book.category}</td>
    <td className="book-title">{book.title}</td>
    <td>
      <button type="button" onClick={() => removeBook(book)} className="delete-btn">
        Delete
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,

  removeBook: PropTypes.func,
};

Book.defaultProps = {
  removeBook: () => null,
};

export default Book;
