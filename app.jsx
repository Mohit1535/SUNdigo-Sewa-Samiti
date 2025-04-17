import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';  // Capitalized import
import Navbar from './navbar'; // Capitalized import
import Service from './service';
import Contact from './contact';
import Gallery from './gallery'
import About from './about';
import Sewa from './sewa';
import Error from './error'
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/sewa" element={<Sewa />} />
        <Route path="/*" element={<Error />} />



        

      </Routes>
    </BrowserRouter>
  );
}
