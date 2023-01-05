import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../css/Books.module.css';

const Books = (props) => {
  const { books } = props;
  return (
      books.map((book) => (
        <div 
        key={book.id}
        book={book}>
          <Link to={`/books/${book.id}`}>
            <div>
              <h2>{book.title}</h2>
              <h3>{book.author}</h3>x
            </div>
          </Link>
          
          <Link to={`/books/${book.id}`}>
            View Details
          </Link>
        </div>
      ))
  );
};

Books.defaultProps = {
  books: [],
};

Books.propTypes = {
  books: PropTypes.instanceOf(Array),
};

export default Books;
