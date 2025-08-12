import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faThLarge, 
  faPercent, 
  faStar, 
  faTruckFast, 
  faSearch, 
  faShoppingCart,
  faBowlFood,
  faGamepad,
  faShirt,
  faBed,
  faSoap,
  faHeartPulse,
  faCar,
  faDumbbell
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ cartItemsCount, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Alimentos', icon: faBowlFood },
    { name: 'Juguetes', icon: faGamepad },
    { name: 'Ropa y Accesorios', icon: faShirt },
    { name: 'Camas y Muebles', icon: faBed },
    { name: 'Higiene y Cuidado', icon: faSoap },
    { name: 'Salud y Bienestar', icon: faHeartPulse },
    { name: 'Viajes y Transporte', icon: faCar },
    { name: 'Entrenamiento', icon: faDumbbell }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button 
          className="navbar-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} className="navbar-icon" />
        </button>
        
        <Link className="navbar-brand" to="/inicio">
          <img src="/project petpedia1/imagenes/logo.png" alt="Logo de PetPedia" className="navbar-logo" />
        </Link>
        
        <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle" 
                aria-haspopup="true" 
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faThLarge} className="navbar-icon" />
                Categorías
              </button>
              <div className="dropdown-menu">
                {categories.map((category, index) => (
                  <Link className="dropdown-item" to="#" key={index}>
                    <FontAwesomeIcon icon={category.icon} className="navbar-icon" />
                    {category.name}
                  </Link>
                ))}
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <FontAwesomeIcon icon={faPercent} className="navbar-icon" />
                Ofertas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <FontAwesomeIcon icon={faStar} className="navbar-icon" />
                Novedades
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <FontAwesomeIcon icon={faTruckFast} className="navbar-icon" />
                Mis Pedidos
              </Link>
            </li>
          </ul>
          
          <div className="navbar-actions">
            <form className="navbar-search" onSubmit={handleSearch}>
              <input 
                type="text" 
                className="search-input" 
                placeholder="¿Qué estás buscando?" 
                aria-label="Buscar productos"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-button" type="submit">
                <FontAwesomeIcon icon={faSearch} className="navbar-icon" />
                <span className="search-text">Buscar</span>
              </button>
            </form>
            
            <Link to="/carritocompra" className="cart-button" aria-label="Carrito de compras">
              <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
              {cartItemsCount > 0 && (
                <span className="cart-badge">{cartItemsCount}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;