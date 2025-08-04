import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from './components/SideBar/SideBar';
import Compra from './Pages/Compra/Compra';
import Inicio from './Pages/Home/Inicio';
import Foro from './Pages/Foro/Foro'; // Importa el componente Foro
import Veterinaria from './Pages/Veterinaria/Veterinaria'; // Importa el componente Veterinaria
import './App.css'; // Asegúrate de tener un archivo CSS para estilos personalizados

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
          <Route path="/foro" element={<Foro />} /> {/* Ruta para el foro */}
          <Route path="/veterinaria" element={<Veterinaria />} /> {/* Ruta para Veterinaria */}
          <Route path="*" element={<div>Página no encontrada</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;