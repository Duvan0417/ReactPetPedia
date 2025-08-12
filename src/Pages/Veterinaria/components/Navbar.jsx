import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faThLarge, 
  faAmbulance, 
  faUserMd, 
  faDog, 
  faAllergies, 
  faHeartbeat,
  faStar,
  faClock,
  faCalendarAlt,
  faSearch,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', searchQuery);
    // Aquí iría la lógica de búsqueda
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/inicio">
          <img 
            src="/project_petpedia1/imagenes/logo.png" 
            alt="Petpedia Logo" 
            width="120"
          />
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarVet">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
                aria-expanded={isDropdownOpen}
              >
                <FontAwesomeIcon icon={faThLarge} className="me-2" />
                Especialidades
              </a>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <li><a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon={faAmbulance} className="me-2" />
                  Urgencias 24h
                </a></li>
                <li><a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon={faUserMd} className="me-2" />
                  Cirugía
                </a></li>
                <li><a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon={faDog} className="me-2" />
                  Exóticos
                </a></li>
                <li><a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon={faAllergies} className="me-2" />
                  Dermatología
                </a></li>
                <li><a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon={faHeartbeat} className="me-2" />
                  Cardiología
                </a></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faStar} className="me-2" />
                Mejor valoradas
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faClock} className="me-2" />
                Abiertas ahora
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/citasveterinarias">
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                Mis Citas
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <form className="d-flex me-3" onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar veterinarias, servicios..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-outline-primary" type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </form>

            <div className="dropdown">
              <a 
                href="#" 
                className="d-flex align-items-center text-decoration-none dropdown-toggle"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img 
                  src="/api/placeholder/40/40" 
                  alt="Usuario" 
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                />
                <span className="me-2">Usuario</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li><a className="dropdown-item" href="#">Perfil</a></li>
                <li><a className="dropdown-item" href="#">Configuración</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;