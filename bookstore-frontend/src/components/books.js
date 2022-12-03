import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  const { books } = props;
  return (
    <div>
      <h1>These books are from the API</h1>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.body}</p>
        </div>
      ))}
    </div>
  );
};

Books.defaultProps = {
  books: [],
};

Books.propTypes = {
  books: PropTypes.instanceOf(Array),
};

export default Books;
