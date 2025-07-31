import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Compra from './Pages/Compra/Compra';
import Inicio from './Pages/Home/Inicio';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/compra" element={<Compra />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/carritocompra" element={<Carrito />} />
        <Route path="/" element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;