import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/inicio">
        <img src="/project petpedia1/imagenes/logo.png" alt="Petpedia Logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarVet"
        aria-controls="navbarVet"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarVet">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownVet"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-th-large mr-2"></i>Especialidades
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownVet">
              <a className="dropdown-item" href="#">
                <i className="fas fa-ambulance mr-2"></i>Urgencias 24h
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-user-md mr-2"></i>Cirugía
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-dog mr-2"></i>Exóticos
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-allergies mr-2"></i>Dermatología
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-heartbeat mr-2"></i>Cardiología
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-star mr-2"></i>Mejor valoradas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-clock mr-2"></i>Abiertas ahora
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/citasveterinarias">
              <i className="fas fa-calendar-alt mr-2"></i>Mis Citas
            </a>
          </li>
        </ul>
        <div className="d-flex align-items-center ml-auto">
          <div className="input-group mr-3">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Buscar veterinarias, servicios..."
            />
            <div className="input-group-append">
              <button className="btn-search" type="button">
                <i className="fas fa-search mr-2"></i>Buscar
              </button>
            </div>
          </div>
          <div className="user-profile ml-3">
            <img src="/api/placeholder/40/40" alt="Usuario" className="avatar" />
            <span className="username">Usuario</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;