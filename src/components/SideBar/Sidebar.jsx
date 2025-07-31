import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { path: '/inicio', icon: 'fas fa-home', name: 'Inicio' },
    { path: '/compra', icon: 'fas fa-shopping-cart', name: 'Compra' },
    { path: '/veterinaria', icon: 'fas fa-clinic-medical', name: 'Veterinaria' },
    { path: '/adopcion', icon: 'fas fa-paw', name: 'Adopciones' },
    { path: '/foro', icon: 'fas fa-comments', name: 'Foro' },
    { path: '/perfil', icon: 'fas fa-user', name: 'Perfil' },
    { path: '/ajustes', icon: 'fas fa-cog', name: 'Configuración' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/api/placeholder/80/80" alt="Logo de PetPedia" className="logo" />
        <span className="logo-text">PetPedia</span>
      </div>
      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <Link 
            to={item.path} 
            className={`menu-item ${window.location.pathname === item.path ? 'active' : ''}`}
            key={index}
            aria-label={item.name}
          >
            <i className={item.icon}></i>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar; 