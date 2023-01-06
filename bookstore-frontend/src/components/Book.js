import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../App.js';

import { HOST_URL } from './Books.js';



const Book = () => {
  const [book, setBook] = useState([]);
  let { bookId } = useParams();


  useEffect(() => {
    axios
    .get(`${API_URL}/${bookId}`)
    .then(res => {
      console.log(res)
      setBook(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

console.log(book)
    return (
    <div>
      <div style={{backgroundImage: `url(${HOST_URL}${book.cover || "cover_temp.png"})`, backgroundSize: 'contain',
backgroundRepeat: 'no-repeat', width: 200, height: 200}}></div>
<div>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.body}</p>
      </div>

      <div>
      <Link to={'/'}>
        Back to List
      </Link>
      </div>
    </div>
    )
}

export default Book;