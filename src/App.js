import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Router from './routes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.js';
import About from './pages/about/About';
import Team from './pages/team/Team';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';

const App = () => {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path='/about' element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
