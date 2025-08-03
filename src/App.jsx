import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/SideBar/SideBar';
import Compra from './Pages/Compra/Compra';
import Inicio from './Pages/Home/Inicio';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar /> {/* Sidebar siempre visible */}
        <Routes>
          {/* Redirige la raíz (/) a /inicio */}
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/compra" element={<Compra />} />
          <Route path="*" element={<div>Página no encontrada</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;