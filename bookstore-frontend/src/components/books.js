import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../css/Books.module.css';

export const HOST_URL = 'http://localhost:3001/';

const Books = (props) => {
  const { books } = props;

  return (
      books.map((book) => (
        <div 
        key={book.id}
        book={book}>
          <Link to={`/${book.id}`}>
            <div style={{backgroundImage: `url(${HOST_URL}${book.cover || "cover_temp.png"})`, backgroundSize: 'contain',
backgroundRepeat: 'no-repeat', width: 200, height: 200}}></div>
          </Link>
          <Link to={`/${book.id}`}>
            <div>
              <h2>{book.title}</h2>
              <h3>{book.author}</h3>
            </div>
          </Link>
          
          <div>
            <Link to={`/${book.id}`}>
              View Details
            </Link>
          </div>
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
