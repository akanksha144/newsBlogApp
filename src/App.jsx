// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=dc0c38b357a44e5b97613dee9e411ede")
      .then((response) => {
        setPosts(response.data.articles);
      });

      
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post/:id" element={<Post posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
}
 export default App;


