import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Inicio.css'; // Assuming you have a CSS file for styling

const Inicio = () => {
  return (
    <div className="inicio-container">
      {/* Sidebar mejorado */}
      <div className="sidebar">
        <div className="sidebar-header">
          <img src="/api/placeholder/80/80" alt="Logo" className="logo" />
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

      {/* Botón de menú para móviles */}
      <div className="menu-toggle">
        <i className="fas fa-bars"></i>
      </div>

      {/* Contenido principal */}
      <div className="main-header">
        {/* Banner principal */}
        <div className="banner">
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <h1>Bienvenido a Petpedia</h1>
            <p>Tu portal completo para todo lo relacionado con mascotas. Adopta, compra productos, encuentra veterinarios y conecta con otros amantes de los animales.</p>
            <a href="#" className="btn btn-banner">Descubrir Ahora</a>
          </div>
        </div>

        {/* Sección de características */}
        <section className="features-section">
          <div className="container">
            <div className="section-title">
              <h2>Nuestros Servicios</h2>
              <p>Descubre todo lo que Petpedia puede ofrecerte a ti y a tu mascota</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="fas fa-paw"></i>
                  </div>
                  <h3>Adopciones</h3>
                  <p>Encuentra tu compañero perfecto entre cientos de mascotas que buscan un hogar amoroso. Proceso de adopción simplificado y responsable.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <h3>Tienda</h3>
                  <p>Productos de calidad para el cuidado y bienestar de tu mascota. Alimentos, accesorios, juguetes y mucho más con entrega a domicilio.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="fas fa-clinic-medical"></i>
                  </div>
                  <h3>Veterinaria</h3>
                  <p>Conecta con los mejores veterinarios de tu zona. Consultas online, reserva de citas y consejos de salud para tu mascota.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mascotas destacadas */}
        <section className="featured-pets">
          <div className="container">
            <div className="section-title">
              <h2>Mascotas en Adopción</h2>
              <p>Estas adorables mascotas están esperando encontrar un hogar. ¡Conoce a nuestros amigos destacados!</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="pet-card">
                  <div className="pet-card-img">
                    <img src="/api/placeholder/400/250" alt="Perro en adopción" />
                    <div className="pet-tag">Perro</div>
                  </div>
                  <div className="pet-card-content">
                    <h3 className="pet-name">Max</h3>
                    <div className="pet-details">
                      <span><i className="fas fa-calendar-alt"></i> 2 años</span>
                      <span><i className="fas fa-map-marker-alt"></i> Madrid</span>
                      <span><i className="fas fa-venus-mars"></i> Macho</span>
                    </div>
                    <p className="pet-description">Max es un labrador cariñoso y juguetón que adora a los niños. Está vacunado, desparasitado y listo para formar parte de una familia amorosa.</p>
                    <div className="pet-actions">
                      <a href="#" className="btn btn-pet btn-adopt">Adoptar</a>
                      <a href="#" className="btn btn-pet btn-info">Más Info</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pet-card">
                  <div className="pet-card-img">
                    <img src="/api/placeholder/400/250" alt="Gato en adopción" />
                    <div className="pet-tag">Gato</div>
                  </div>
                  <div className="pet-card-content">
                    <h3 className="pet-name">Luna</h3>
                    <div className="pet-details">
                      <span><i className="fas fa-calendar-alt"></i> 1 año</span>
                      <span><i className="fas fa-map-marker-alt"></i> Barcelona</span>
                      <span><i className="fas fa-venus-mars"></i> Hembra</span>
                    </div>
                    <p className="pet-description">Luna es una gatita siamesa tranquila y cariñosa. Es muy limpia, le encanta acurrucarse y será una compañera perfecta para un hogar tranquilo.</p>
                    <div className="pet-actions">
                      <a href="#" className="btn btn-pet btn-adopt">Adoptar</a>
                      <a href="#" className="btn btn-pet btn-info">Más Info</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pet-card">
                  <div className="pet-card-img">
                    <img src="/api/placeholder/400/250" alt="Conejo en adopción" />
                    <div className="pet-tag">Conejo</div>
                  </div>
                  <div className="pet-card-content">
                    <h3 className="pet-name">Coco</h3>
                    <div className="pet-details">
                      <span><i className="fas fa-calendar-alt"></i> 8 meses</span>
                      <span><i className="fas fa-map-marker-alt"></i> Valencia</span>
                      <span><i className="fas fa-venus-mars"></i> Macho</span>
                    </div>
                    <p className="pet-description">Coco es un conejo enano muy activo y curioso. Es ideal para personas que quieran una mascota pequeña pero con mucha personalidad.</p>
                    <div className="pet-actions">
                      <a href="#" className="btn btn-pet btn-adopt">Adoptar</a>
                      <a href="#" className="btn btn-pet btn-info">Más Info</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <a href="adopcion.html" className="btn btn-banner">Ver todas las mascotas</a>
            </div>
          </div>
        </section>

        {/* Contador de estadísticas */}
        <section className="stats-section">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-6">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-paw"></i>
                  </div>
                  <div className="stat-count">2,580+</div>
                  <div className="stat-title">Adopciones</div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="stat-count">15,000+</div>
                  <div className="stat-title">Usuarios</div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-clinic-medical"></i>
                  </div>
                  <div className="stat-count">350+</div>
                  <div className="stat-title">Veterinarios</div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-globe"></i>
                  </div>
                  <div className="stat-count">35+</div>
                  <div className="stat-title">Ciudades</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de testimonios */}
        <section className="testimonials">
          <div className="container">
            <div className="section-title">
              <h2>Testimonios</h2>
              <p>Lo que dicen nuestros usuarios sobre su experiencia con Petpedia</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="testimonial-card">
                  <div className="testimonial-quote">
                    <i className="fas fa-quote-right"></i>
                  </div>
                  <p className="testimonial-text">Gracias a Petpedia encontré a mi compañero perfecto. El proceso de adopción fue sencillo y me apoyaron en todo momento. Ahora Toby y yo somos inseparables.</p>
                  <div className="testimonial-author">
                    <div className="testimonial-author-img">
                      <img src="/api/placeholder/60/60" alt="Usuario" />
                    </div>
                    <div className="testimonial-author-info">
                      <h4>Carlos Martínez</h4>
                      <p>Madrid</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial-card">
                  <div className="testimonial-quote">
                    <i className="fas fa-quote-right"></i>
                  </div>
                  <p className="testimonial-text">La tienda online tiene todo lo que mi gata necesita. Precios competitivos y envíos rápidos. El servicio al cliente es excelente, siempre resuelven mis dudas.</p>
                  <div className="testimonial-author">
                    <div className="testimonial-author-img">
                      <img src="/api/placeholder/60/60" alt="Usuario" />
                    </div>
                    <div className="testimonial-author-info">
                      <h4>Ana López</h4>
                      <p>Barcelona</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial-card">
                  <div className="testimonial-quote">
                    <i className="fas fa-quote-right"></i>
                  </div>
                  <p className="testimonial-text">El servicio veterinario online me ha salvado en varias ocasiones. Pude consultar rápidamente cuando mi perro tenía un problema y recibí asesoramiento profesional inmediato.</p>
                  <div className="testimonial-author">
                    <div className="testimonial-author-img">
                      <img src="/api/placeholder/60/60" alt="Usuario" />
                    </div>
                    <div className="testimonial-author-info">
                      <h4>Miguel Sánchez</h4>
                      <p>Valencia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de blog */}
        <section className="blog-section">
          <div className="container">
            <div className="section-title">
              <h2>Nuestro Blog</h2>
              <p>Artículos y consejos para el cuidado y bienestar de tus mascotas</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="blog-post">
                  <div className="blog-img">
                    <img src="/api/placeholder/400/200" alt="Blog Post" />
                    <div className="blog-date">12 May</div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-category">Salud</div>
                    <h3 className="blog-title">Consejos para mantener a tu mascota saludable en verano</h3>
                    <p className="blog-text">Descubre cómo proteger a tu mascota del calor y mantenerla hidratada durante los meses de verano...</p>
                    <a href="#" className="blog-link">Leer más <i className="fas fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-post">
                  <div className="blog-img">
                    <img src="/api/placeholder/400/200" alt="Blog Post" />
                    <div className="blog-date">5 May</div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-category">Nutrición</div>
                    <h3 className="blog-title">Alimentos que nunca debes dar a tu perro</h3>
                    <p className="blog-text">Algunos alimentos humanos pueden ser peligrosos para tu perro. Aprende cuáles debes evitar a toda costa...</p>
                    <a href="#" className="blog-link">Leer más <i className="fas fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-post">
                  <div className="blog-img">
                    <img src="/api/placeholder/400/200" alt="Blog Post" />
                    <div className="blog-date">28 Abr</div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-category">Comportamiento</div>
                    <h3 className="blog-title">Cómo entrenar a tu gato para usar el arenero</h3>
                    <p className="blog-text">Guía paso a paso para enseñar a tu gatito a usar correctamente el arenero desde el primer día...</p>
                    <a href="#" className="blog-link">Leer más <i className="fas fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <a href="foro.html" className="btn btn-banner">Ver todos los artículos</a>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter">
          <div className="container">
            <div className="newsletter-content">
              <h3>¡Suscríbete a nuestra newsletter!</h3>
              <p>Recibe las últimas noticias, consejos de cuidado para mascotas y ofertas exclusivas directamente en tu correo.</p>
              <form className="newsletter-form">
                <input type="email" className="newsletter-input" placeholder="Tu correo electrónico" required />
                <button type="submit" className="newsletter-btn">Suscribirse</button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer mejorado */}
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

        {/* Botón volver arriba */}
        <div className="back-to-top">
          <i className="fas fa-arrow-up"></i>
        </div>
      </div>
    </div>
  );
};

export default Inicio;