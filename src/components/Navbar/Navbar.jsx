import React from 'react';
import { FaHome, FaTag, FaNewspaper, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#">Mi Tienda</a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#">
            <FaHome />
            Categorías
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <FaTag />
            Ofertas
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <FaNewspaper />
            Novedades
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <FaShoppingCart />
            Mis Pedidos
          </a>
        </li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="¿Qué estás buscando?" />
        <button type="submit">Buscar</button>
      </div>
    </nav>
  );
};

export default Navbar;