import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import Books from './components/Books';
import Book from './components/Book';
import NavBar from './components/Nav/Navbar';
import Favorites from './components/Favorites';
import New from './components/New';


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
      <NavBar />
      <Routes>
        <Route path='/' element={<Books books={books} />} />
        <Route path=':bookId' element={<Book />} />
        <Route path='mybooks' element={<Favorites />} />
        <Route path='new' element={<New />} />
       </Routes>
    </div>
  );
}

export default App;
