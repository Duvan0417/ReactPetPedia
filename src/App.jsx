import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from './components/SideBar/Sidebar';
import Compra from './Pages/Compra/Compra';
import Inicio from './Pages/Home/Inicio';
import Configuracion from './Pages/Configuracion/Configuracion';
import ProfileSection from './Pages/Configuracion/Components/ProfileSection';
import NotificationsSection from './Pages/Configuracion/Components/NotificationsSection';
import Foro from './Pages/Foro/Foro';
import Veterinaria from './Pages/Veterinaria/Veterinaria';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/compra" element={<Compra />} />
        <Route path="/ajustes" element={<Configuracion />} />
        <Route path="/ajustes/perfil" element={<ProfileSection />} />
        <Route path="/ajustes/notificaciones" element={<NotificationsSection />} />
        <Route path="/ajustes/privacidad" element={<div>Privacidad</div>} />
        <Route path="/foro" element={<Foro />} />
        <Route path="/veterinaria" element={<Veterinaria />} />
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </div>
  );
}

export default App;