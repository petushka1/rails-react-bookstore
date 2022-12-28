import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Books from './components/Books';
import NavBar from './components/Nav/Navbar';

const API_URL = 'http://localhost:3000/api/v1/books';

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
      <Books books={books} />
    </div>
  );
}

export default App;
