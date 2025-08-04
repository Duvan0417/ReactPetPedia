import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoPetpedia from '../../assets/petpedia.png'; 

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/inicio', icon: 'fas fa-home', name: 'Inicio' },
    { path: '/compras', icon: 'fas fa-shopping-cart', name: 'Compras' },
    { path: '/veterinaria', icon: 'fas fa-clinic-medical', name: 'Veterinaria' },
    { path: '/adopcion', icon: 'fas fa-paw', name: 'Adopciones' },
    { path: '/foro', icon: 'fas fa-comments', name: 'Foro' },
    { path: '/perfil', icon: 'fas fa-user', name: 'Perfil' },
    { path: '/ajustes', icon: 'fas fa-cog', name: 'Configuración' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header text-center p-4">
        <img src={logoPetpedia} alt="Logo de PetPedia" className="logo-img" />
        <span className="logo-text font-bold text-white text-lg mt-2 block">PetPedia</span>
      </div>
      
      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <Link
            to={item.path}
            className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
            key={index}
            aria-label={item.name}
          >
            <i className={`${item.icon} me-2`}></i>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
