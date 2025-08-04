import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faThLarge, faPercent, faStar, faShippingFast, faSearch, faShoppingCart, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ cartItemsCount, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Alimentos', icon: faEnvelope },
    { name: 'Juguetes', icon: faThLarge },
    { name: 'Ropa y Accesorios', icon: faPercent },
    { name: 'Camas y Muebles', icon: faStar },
    { name: 'Higiene y Cuidado', icon: faShippingFast },
    { name: 'Salud y Bienestar', icon: faSearch },
    { name: 'Viajes y Transporte', icon: faShoppingCart },
    { name: 'Entrenamiento', icon: faBars }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button className="toggle-sidebar mr-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      
      <Link className="navbar-brand" to="/inicio">
        <img src="/project petpedia1/imagenes/logo.png" alt="Logo de PetPedia" />
      </Link>
      
      <button 
        className="navbar-toggler" 
        type="button" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <button 
              className="nav-link dropdown-toggle" 
              id="navbarDropdown" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faThLarge} className="mr-2" />Categorías
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {categories.map((category, index) => (
                <Link className="dropdown-item" to="#" key={index}>
                  <FontAwesomeIcon icon={category.icon} className="mr-2" />{category.name}
                </Link>
              ))}
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <FontAwesomeIcon icon={faPercent} className="mr-2" />Ofertas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <FontAwesomeIcon icon={faStar} className="mr-2" />Novedades
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <FontAwesomeIcon icon={faShippingFast} className="mr-2" />Mis Pedidos
            </Link>
          </li>
        </ul>
        
        <div className="d-flex align-items-center ml-auto">
          <form className="input-group mr-3" onSubmit={handleSearch}>
            <input 
              type="text" 
              className="form-control search-input" 
              placeholder="¿Qué estás buscando?" 
              aria-label="Buscar productos"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn-search" type="submit">
                <FontAwesomeIcon icon={faSearch} className="mr-2" />Buscar
              </button>
            </div>
          </form>
          
          <Link to="/carritocompra" className="cart-btn" aria-label="Carrito de compras">
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartItemsCount > 0 && (
              <span className="cart-badge">{cartItemsCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;