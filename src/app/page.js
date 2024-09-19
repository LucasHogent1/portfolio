"use client";

import React from 'react';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componenten/navbar';
import Home from './pages/home';
import Contact from './pages/contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;