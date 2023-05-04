// src/app.js
import React from 'react';
import Landing from './Landing';
import Projects from './Projects';

import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </Router>
  );
}


export default App;
