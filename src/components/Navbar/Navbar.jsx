import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemsCount, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Alimentos', icon: 'fas fa-drumstick-bite' },
    { name: 'Juguetes', icon: 'fas fa-bone' },
    { name: 'Ropa y Accesorios', icon: 'fas fa-tshirt' },
    { name: 'Camas y Muebles', icon: 'fas fa-bed' },
    { name: 'Higiene y Cuidado', icon: 'fas fa-shower' },
    { name: 'Salud y Bienestar', icon: 'fas fa-pills' },
    { name: 'Viajes y Transporte', icon: 'fas fa-suitcase' },
    { name: 'Entrenamiento', icon: 'fas fa-graduation-cap' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button className="toggle-sidebar mr-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className="fas fa-bars"></i>
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
              <i className="fas fa-th-large mr-2"></i>Categorías
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {categories.map((category, index) => (
                <Link className="dropdown-item" to="#" key={index}>
                  <i className={`${category.icon} mr-2`}></i>{category.name}
                </Link>
              ))}
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="fas fa-percent mr-2"></i>Ofertas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="fas fa-star mr-2"></i>Novedades
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="fas fa-shipping-fast mr-2"></i>Mis Pedidos
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
                <i className="fas fa-search mr-2"></i>Buscar
              </button>
            </div>
          </form>
          
          <Link to="/carritocompra" className="cart-btn" aria-label="Carrito de compras">
            <i className="fas fa-shopping-cart"></i>
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