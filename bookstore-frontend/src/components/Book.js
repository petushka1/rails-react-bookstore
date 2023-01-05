import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../App.js';



const Book = () => {
  const { book, setBook } = useState({});

  let { bookId } = useParams();
console.log(bookId);


console.log(axios.get(`${API_URL}/${bookId}`).then((res) =>
  res.data)).then((res) => console.log(res))

useEffect(() => {
  let mounted = true;
  axios.get(`${API_URL}/${bookId}`).then((res)=>res.data).then((item) => {
    setBook({id: item.id, title: item.title, body: item.body})
  })
  .catch(error => {
    console.log(error)
  });
});

    return (
    <div book={book}>
      {book.title}
    </div>
    )
}

export default Book;