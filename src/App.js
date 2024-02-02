// src/app.js
import React from 'react';
import Landing from './Landing';
import Projects from './Projects';
import Research from './Research';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/research" element={<Research />} />

      </Routes>
    </Router>
  );
}


export default App;


