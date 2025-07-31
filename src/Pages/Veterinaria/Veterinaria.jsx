import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './veterinaria.css';

const Veterinaria = () => {
  return (
    <div className="veterinaria-container">
      {/* Navbar estilo compra */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="inicio.html">
          <img src="/project petpedia1/imagenes/logo.png" alt="Petpedia Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarVet" aria-controls="navbarVet" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarVet">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownVet" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-th-large mr-2"></i>Especialidades
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownVet">
                <a className="dropdown-item" href="#"><i className="fas fa-ambulance mr-2"></i>Urgencias 24h</a>
                <a className="dropdown-item" href="#"><i className="fas fa-user-md mr-2"></i>Cirugía</a>
                <a className="dropdown-item" href="#"><i className="fas fa-dog mr-2"></i>Exóticos</a>
                <a className="dropdown-item" href="#"><i className="fas fa-allergies mr-2"></i>Dermatología</a>
                <a className="dropdown-item" href="#"><i className="fas fa-heartbeat mr-2"></i>Cardiología</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fas fa-star mr-2"></i>Mejor valoradas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fas fa-clock mr-2"></i>Abiertas ahora</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="citasveterinarias.html"><i className="fas fa-calendar-alt mr-2"></i>Mis Citas</a>
            </li>
          </ul>
          <div className="d-flex align-items-center ml-auto">
            <div className="input-group mr-3">
              <input type="text" className="form-control search-input" placeholder="Buscar veterinarias, servicios..." />
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

      {/* Barra lateral con animación mejorada */}
      <div className="sidebar">
        <div className="sidebar-header">
          <img src="/project petpedia1/imagenes/logo.png" alt="Logo" className="logo" />
          <span className="logo-text">PetPedia</span>
        </div>
        <div className="sidebar-menu">
          <a href="inicio.html" className="menu-item">
            <i className="fas fa-home"></i>
            <span>Inicio</span>
          </a>
          <a href="compra.html" className="menu-item">
            <i className="fas fa-shopping-cart"></i>
            <span>Compra</span>
          </a>
          <a href="veterinaria.html" className="menu-item">
            <i className="fas fa-clinic-medical"></i>
            <span>Veterinaria</span>
          </a>
          <a href="adopcion.html" className="menu-item">
            <i className="fas fa-paw"></i>
            <span>Adopciones</span>
          </a>
          <a href="foro.html" className="menu-item active">
            <i className="fas fa-comments"></i>
            <span>Foro</span>
          </a>
          <a href="#" className="menu-item">
            <i className="fas fa-user"></i>
            <span>Perfil</span>
          </a>
          <a href="ajustes.html" className="menu-item">
            <i className="fas fa-cog"></i>
            <span>Configuración</span>
          </a>
        </div>
      </div>

      {/* Sección principal con tarjetas de veterinarias mejoradas */}
      <div className="container-fluid py-4">
        <div className="section-header">
          <h2>Clínicas Recomendadas</h2>
          <div className="view-options">
            <button className="view-btn active"><i className="fas fa-th-large"></i></button>
            <button className="view-btn"><i className="fas fa-list"></i></button>
          </div>
        </div>
        
        <div className="row vet-cards-container">
          {/* Veterinaria 1 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="vet-card">
              <div className="vet-card-header">
                <img src="https://tse1.mm.bing.net/th/id/OIP.CjJXuzT1vxUJmPnFXL654gHaGD?rs=1&pid=ImgDetMain" alt="Veterinaria 1" className="vet-image" />
                <div className="vet-badges">
                  <span className="vet-badge urgent">Urgencias 24h</span>
                  <span className="vet-badge top">Top rated</span>
                </div>
                <div className="vet-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>4.5</span>
                </div>
              </div>
              <div className="vet-card-body">
                <h3 className="vet-name">PetCare Centro Veterinario</h3>
                <p className="vet-location"><i className="fas fa-map-marker-alt"></i> Centro, 1.2 km</p>
                <div className="vet-services">
                  <span className="service-tag"><i className="fas fa-syringe"></i> Vacunación</span>
                  <span className="service-tag"><i className="fas fa-heartbeat"></i> Cardiología</span>
                  <span className="service-tag"><i className="fas fa-cut"></i> Peluquería</span>
                  <span className="service-tag"><i className="fas fa-pills"></i> Farmacia</span>
                </div>
                <p className="vet-description">Centro veterinario de última generación con especialistas en medicina preventiva, diagnóstico avanzado y cuidados intensivos para todas las especies.</p>
                <div className="vet-schedule">
                  <div className="schedule-icon"><i className="far fa-clock"></i></div>
                  <div className="schedule-text">
                    <p className="open-now">Abierto ahora</p>
                    <p>Lunes a Viernes: 8:00 - 20:00<br />Sábados: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
              <div className="vet-card-footer">
                <a href="#" className="btn-primary-action">
                  <i className="far fa-calendar-plus"></i> Pedir Cita
                </a>
                <div className="secondary-actions">
                  <a href="#" className="btn-icon" title="Llamar"><i className="fas fa-phone-alt"></i></a>
                  <a href="#" className="btn-icon" title="Ver en mapa"><i className="fas fa-map-marked-alt"></i></a>
                  <a href="#" className="btn-icon" title="Favoritos"><i className="far fa-heart"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Veterinaria 2 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="vet-card">
              <div className="vet-card-header">
                <img src="https://tse1.mm.bing.net/th/id/OIP.CjJXuzT1vxUJmPnFXL654gHaGD?rs=1&pid=ImgDetMain" alt="Veterinaria 2" className="vet-image" />
                <div className="vet-badges">
                  <span className="vet-badge specialty">Exóticos</span>
                </div>
                <div className="vet-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <span>4.0</span>
                </div>
              </div>
              <div className="vet-card-body">
                <h3 className="vet-name">Exotic Vet - Especialistas</h3>
                <p className="vet-location"><i className="fas fa-map-marker-alt"></i> Norte, 3.5 km</p>
                <div className="vet-services">
                  <span className="service-tag"><i className="fas fa-microscope"></i> Laboratorio</span>
                  <span className="service-tag"><i className="fas fa-x-ray"></i> Radiología</span>
                  <span className="service-tag"><i className="fas fa-dog"></i> Etología</span>
                </div>
                <p className="vet-description">Clínica especializada en animales exóticos con equipamiento avanzado para diagnóstico y tratamiento de especies no convencionales.</p>
                <div className="vet-schedule">
                  <div className="schedule-icon"><i className="far fa-clock"></i></div>
                  <div className="schedule-text">
                    <p className="open-now">Abierto ahora</p>
                    <p>Martes a Sábado: 9:00 - 19:00<br />Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
              <div className="vet-card-footer">
                <a href="#" className="btn-primary-action">
                  <i className="far fa-calendar-plus"></i> Pedir Cita
                </a>
                <div className="secondary-actions">
                  <a href="#" className="btn-icon" title="Llamar"><i className="fas fa-phone-alt"></i></a>
                  <a href="#" className="btn-icon" title="Ver en mapa"><i className="fas fa-map-marked-alt"></i></a>
                  <a href="#" className="btn-icon" title="Favoritos"><i className="fas fa-heart"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Veterinaria 3 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="vet-card">
              <div className="vet-card-header">
                <img src="https://tse1.mm.bing.net/th/id/OIP.CjJXuzT1vxUJmPnFXL654gHaGD?rs=1&pid=ImgDetMain" alt="Veterinaria 3" className="vet-image" />
                <div className="vet-badges">
                  <span className="vet-badge discount">15% Descuento</span>
                </div>
                <div className="vet-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>5.0</span>
                </div>
              </div>
              <div className="vet-card-body">
                <h3 className="vet-name">VetPlus Centro Quirúrgico</h3>
                <p className="vet-location"><i className="fas fa-map-marker-alt"></i> Sur, 4.8 km</p>
                <div className="vet-services">
                  <span className="service-tag"><i className="fas fa-user-md"></i> Cirugía</span>
                  <span className="service-tag"><i className="fas fa-tooth"></i> Odontología</span>
                  <span className="service-tag"><i className="fas fa-stethoscope"></i> Oftalmología</span>
                </div>
                <p className="vet-description">Centro veterinario especializado en cirugías avanzadas y tratamientos de rehabilitación con tecnología de vanguardia.</p>
                <div className="vet-schedule">
                  <div className="schedule-icon"><i className="far fa-clock"></i></div>
                  <div className="schedule-text">
                    <p className="closed-now">Cerrado ahora</p>
                    <p>Lunes a Domingo: 10:00 - 18:00<br />Urgencias: 24h</p>
                  </div>
                </div>
              </div>
              <div className="vet-card-footer">
                <a href="#" className="btn-primary-action">
                  <i className="far fa-calendar-plus"></i> Pedir Cita
                </a>
                <div className="secondary-actions">
                  <a href="#" className="btn-icon" title="Llamar"><i className="fas fa-phone-alt"></i></a>
                  <a href="#" className="btn-icon" title="Ver en mapa"><i className="fas fa-map-marked-alt"></i></a>
                  <a href="#" className="btn-icon" title="Favoritos"><i className="far fa-heart"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Veterinaria 4 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="vet-card">
              <div className="vet-card-header">
                <img src="https://tse1.mm.bing.net/th/id/OIP.CjJXuzT1vxUJmPnFXL654gHaGD?rs=1&pid=ImgDetMain" alt="Veterinaria 4" className="vet-image" />
                <div className="vet-badges">
                  <span className="vet-badge new">Nuevo</span>
                </div>
                <div className="vet-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                  <span>3.5</span>
                </div>
              </div>
              <div className="vet-card-body">
                <h3 className="vet-name">MascotaSana Preventiva</h3>
                <p className="vet-location"><i className="fas fa-map-marker-alt"></i> Este, 2.3 km</p>
                <div className="vet-services">
                  <span className="service-tag"><i className="fas fa-syringe"></i> Vacunación</span>
                  <span className="service-tag"><i className="fas fa-paw"></i> Nutrición</span>
                  <span className="service-tag"><i className="fas fa-shield-alt"></i> Prevención</span>
                </div>
                <p className="vet-description">Centro especializado en medicina preventiva, vacunación y nutrición para mascotas con planes personalizados de cuidado.</p>
                <div className="vet-schedule">
                  <div className="schedule-icon"><i className="far fa-clock"></i></div>
                  <div className="schedule-text">
                    <p className="open-now">Abierto ahora</p>
                    <p>Miércoles a Domingo: 9:00 - 16:00<br />Consulta online: 24h</p>
                  </div>
                </div>
              </div>
              <div className="vet-card-footer">
                <a href="#" className="btn-primary-action">
                  <i className="far fa-calendar-plus"></i> Pedir Cita
                </a>
                <div className="secondary-actions">
                  <a href="#" className="btn-icon" title="Llamar"><i className="fas fa-phone-alt"></i></a>
                  <a href="#" className="btn-icon" title="Ver en mapa"><i className="fas fa-map-marked-alt"></i></a>
                  <a href="#" className="btn-icon" title="Favoritos"><i className="far fa-heart"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Veterinaria 5 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="vet-card">
              <div className="vet-card-header">
                <img src="https://tse1.mm.bing.net/th/id/OIP.CjJXuzT1vxUJmPnFXL654gHaGD?rs=1&pid=ImgDetMain" alt="Veterinaria 5" className="vet-image" />
                <div className="vet-badges">
                  <span className="vet-badge urgent">Urgencias 24h</span>
                  <span className="vet-badge promo">Primera visita gratis</span>
                </div>
                <div className="vet-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <span>4.0</span>
                </div>
              </div>
              <div className="vet-card-body">
                <h3 className="vet-name">Animal Health Hospital</h3>
                <p className="vet-location"><i className="fas fa-map-marker-alt"></i> Oeste, 5.7 km</p>
                <div className="vet-services">
                  <span className="service-tag"><i className="fas fa-ambulance"></i> Emergencias</span>
                  <span className="service-tag"><i className="fas fa-heartbeat"></i> Cardiología</span>
                  <span className="service-tag"><i className="fas fa-brain"></i> Neurología</span>
                </div>
                <p className="vet-description">Hospital veterinario completo con atención de emergencias las 24 horas. Equipamiento completo para diagnóstico y tratamiento avanzado.</p>
                <div className="vet-schedule">
                  <div className="schedule-icon"><i className="far fa-clock"></i></div>
                  <div className="schedule-text">
                    <p className="open-now">Abierto 24/7</p>
                    <p>Consultas: Lunes a Domingo: 10:00 - 20:00<br />Emergencias: 24h</p>
                  </div>
                </div>
              </div>
              <div className="vet-card-footer">
                <a href="#" className="btn-primary-action">
                  <i className="far fa-calendar-plus"></i> Pedir Cita
                </a>
                <div className="secondary-actions">
                  <a href="#" className="btn-icon" title="Llamar"><i className="fas fa-phone-alt"></i></a>
                  <a href="#" className="btn-icon" title="Ver en mapa"><i className="fas fa-map-marked-alt"></i></a>
                  <a href="#" className="btn-icon" title="Favoritos"><i className="far fa-heart"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Veterinaria 6 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="vet-card">
              <div className="vet-card-header">
                <img src="https://tse1.mm.bing.net/th/id/OIP.CjJXuzT1vxUJmPnFXL654gHaGD?rs=1&pid=ImgDetMain" alt="Veterinaria 6" className="vet-image" />
                <div className="vet-badges">
                  <span className="vet-badge eco">Eco-friendly</span>
                </div>
                <div className="vet-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>4.5</span>
                </div>
              </div>
              <div className="vet-card-body">
                <h3 className="vet-name">NaturPet Holística</h3>
                <p className="vet-location"><i className="fas fa-map-marker-alt"></i> Norte, 3.2 km</p>
                <div className="vet-services">
                  <span className="service-tag"><i className="fas fa-spa"></i> Acupuntura</span>
                  <span className="service-tag"><i className="fas fa-leaf"></i> Homeopatía</span>
                  <span className="service-tag"><i className="fas fa-seedling"></i> Nutrición natural</span>
                </div>
                <p className="vet-description">Centro veterinario especializado en medicina integrativa y tratamientos holísticos para el bienestar completo de tu mascota.</p>
                <div className="vet-schedule">
                  <div className="schedule-icon"><i className="far fa-clock"></i></div>
                  <div className="schedule-text">
                    <p className="closed-now">Cerrado ahora</p>
                    <p>Miércoles a Domingo: 9:00 - 18:00<br />Lunes y Martes: Cerrado</p>
                  </div>
                </div>
              </div>
              <div className="vet-card-footer">
                <a href="#" className="btn-primary-action">
                  <i className="far fa-calendar-plus"></i> Pedir Cita
                </a>
                <div className="secondary-actions">
                  <a href="#" className="btn-icon" title="Llamar"><i className="fas fa-phone-alt"></i></a>
                  <a href="#" className="btn-icon" title="Ver en mapa"><i className="fas fa-map-marked-alt"></i></a>
                  <a href="#" className="btn-icon" title="Favoritos"><i className="far fa-heart"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Paginación */}
        <div className="pagination-container">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="" aria-label="Previous">
                <i className="fas fa-chevron-left"></i>
              </a>
            </li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <i className="fas fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Banner promocional */}
      <div className="promo-banner">
        <div className="promo-content">
          <div className="promo-text">
            <h3>¿Eres veterinario?</h3>
            <p>Únete a nuestra red de profesionales y aumenta tu visibilidad</p>
          </div>
          <a href="#" className="btn-register">Registra tu clínica</a>
        </div>
      </div>
      
      {/* Footer mejorado con secciones y newsletter */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>PetPedia</h5>
              <p>Tu plataforma integral para el cuidado y bienestar de tus mascotas.</p>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="col-md-2">
              <h5>Explorar</h5>
              <ul className="footer-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Tienda</a></li>
                <li><a href="#">Veterinaria</a></li>
                <li><a href="#">Adopciones</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Soporte</h5>
              <ul className="footer-links">
                <li><a href="#">Centro de ayuda</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Suscríbete a nuestro boletín</h5>
              <p>Mantente al día con las últimas noticias y consejos para tus mascotas.</p>
              <div className="footer-newsletter">
                <input type="email" placeholder="Tu email" />
                <button type="submit"><i className="fas fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 PetPedia. Todos los derechos reservados.</p>
            <ul className="policy-links">
              <li><a href="#">Términos de uso</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Modal para programar cita */}
      <div className="modal fade" id="appointmentModal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Programar Cita Veterinaria</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Mascota</label>
                  <select className="form-control">
                    <option>Selecciona tu mascota</option>
                    <option>Rocky (Perro)</option>
                    <option>Luna (Gato)</option>
                    <option>+ Agregar nueva mascota</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Tipo de consulta</label>
                  <select className="form-control">
                    <option>Consulta general</option>
                    <option>Vacunación</option>
                    <option>Urgencia</option>
                    <option>Cirugía</option>
                    <option>Dermatología</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Fecha preferida</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Hora preferida</label>
                  <select className="form-control">
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Notas adicionales</label>
                  <textarea className="form-control" rows="3" placeholder="Describe brevemente el motivo de la consulta..."></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary">Confirmar Cita</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Veterinaria;