import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useParams } from 'react-router-dom';

import Books from './components/Books';
import Book from './components/Book';
import NavBar from './components/Nav/Navbar';


export const API_URL = 'http://localhost:3000/api/v1/books';

const getAPIData = () => axios.get(API_URL).then((response) => response.data);

function App() {
  const [books, setBooks] = useState([]);
 

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setBooks(items);
      }
    });
    return () => { (mounted = false); };
  }, []);
  
  return (
    <div className="App">
      <Routes>
        <Route path='books' element={<Books />} />
        <Route path='books/:bookId' element={<Book />} />
       </Routes>
      <NavBar />
      <Books books={books} />
    </div>
  );
}

export default App;
