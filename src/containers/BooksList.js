import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = ({ books }) => {
  const showBooks = books.length > 0 ? (books.map(book => (
    <Book book={book} />  
  ))) : null;

  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {showBooks}
    </table>
  )
};

const mapStateToProps = ( { booksReducer: { books } }) => ({
  books,
});

export default connect(mapStateToProps)(BookList);
