import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './foro.css';

const Foro = () => {
  return (
    <div className="foro-container">
      {/* Barra lateral de navegación */}
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

      {/* Contenido principal */}
      <div className="main-content">
        <header className="forum-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h1 className="forum-title">Foro de la Comunidad PetPedia</h1>
                <p className="forum-subtitle">Comparte experiencias y conocimientos sobre mascotas con miles de amantes de los animales</p>
              </div>
              <div className="col-md-4">
                <div className="search-container">
                  <input type="text" placeholder="Buscar en el foro" className="search-input" />
                  <button className="btn-search"><i className="fas fa-search"></i></button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mt-4">
          <div className="row">
            {/* Sección principal del foro */}
            <div className="col-lg-8">
              {/* Filtros y ordenamiento */}
              <div className="forum-actions">
                <div className="filters">
                  <button className="btn-filter active">Todos</button>
                  <button className="btn-filter">Populares</button>
                  <button className="btn-filter">Recientes</button>
                  <button className="btn-filter">Sin responder</button>
                </div>
                <div className="sort-options">
                  <select className="form-control form-control-sm">
                    <option>Más recientes</option>
                    <option>Más antiguos</option>
                    <option>Más comentarios</option>
                    <option>Más populares</option>
                  </select>
                </div>
              </div>

              {/* Publicaciones */}
              <div className="forum-posts">
                {/* Publicación 1 */}
                <div className="post-card">
                  <div className="post-author">
                    <img src="/api/placeholder/50/50" alt="Avatar" className="author-avatar" />
                    <div className="author-info">
                      <h6 className="author-name">Maria González</h6>
                      <span className="post-date">05 May 2025 · 10:45 AM</span>
                    </div>
                    <div className="post-category" data-category="consejos">
                      <i className="fas fa-lightbulb"></i> Consejos
                    </div>
                  </div>
                  <div className="post-content">
                    <h4 className="post-title">Mi perro no quiere comer: Consejos que funcionaron para mí</h4>
                    <p className="post-text">Después de semanas de preocupación porque mi labrador no quería comer, descubrí algunas técnicas que realmente funcionaron. Comparto mi experiencia para ayudar a otros dueños con el mismo problema...</p>
                    <div className="post-image">
                      <img src="/api/placeholder/600/300" alt="Imagen del post" className="img-fluid rounded" />
                    </div>
                  </div>
                  <div className="post-stats">
                    <div className="stat">
                      <i className="far fa-heart"></i>
                      <span>24</span>
                    </div>
                    <div className="stat">
                      <i className="far fa-comment"></i>
                      <span>18</span>
                    </div>
                    <div className="stat">
                      <i className="far fa-eye"></i>
                      <span>142</span>
                    </div>
                  </div>
                  <div className="post-comments-section">
                    <h5 className="comments-title">Comentarios (18)</h5>
                    <div className="comment">
                      <img src="/api/placeholder/40/40" alt="Usuario" className="comment-avatar" />
                      <div className="comment-content">
                        <div className="comment-header">
                          <span className="comment-author">Carlos Ruiz</span>
                          <span className="comment-date">Hace 2 horas</span>
                        </div>
                        <p className="comment-text">¡Gracias por compartir! Mi golden retriever tuvo el mismo problema y voy a probar tus consejos.</p>
                      </div>
                    </div>
                    <div className="comment">
                      <img src="/api/placeholder/40/40" alt="Usuario" className="comment-avatar" />
                      <div className="comment-content">
                        <div className="comment-header">
                          <span className="comment-author">Ana Martínez</span>
                          <span className="comment-date">Hace 5 horas</span>
                        </div>
                        <p className="comment-text">Yo también tuve ese problema. Algo que me funcionó fue cambiar el horario de alimentación.</p>
                      </div>
                    </div>
                    <div className="add-comment">
                      <img src="/api/placeholder/40/40" alt="Tu avatar" className="comment-avatar" />
                      <textarea placeholder="Escribe un comentario..." className="comment-input"></textarea>
                      <button className="btn-comment">Comentar</button>
                    </div>
                  </div>
                </div>

                {/* Publicación 2 */}
                <div className="post-card">
                  <div className="post-author">
                    <img src="/api/placeholder/50/50" alt="Avatar" className="author-avatar" />
                    <div className="author-info">
                      <h6 className="author-name">Pedro Sánchez</h6>
                      <span className="post-date">04 May 2025 · 18:20 PM</span>
                    </div>
                    <div className="post-category" data-category="salud">
                      <i className="fas fa-heartbeat"></i> Salud
                    </div>
                  </div>
                  <div className="post-content">
                    <h4 className="post-title">¿Cuáles son las vacunas obligatorias para gatos en 2025?</h4>
                    <p className="post-text">Con los recientes cambios en las regulaciones veterinarias, me gustaría saber cuáles son las vacunas que necesita mi gato este año. ¿Alguien tiene información actualizada?</p>
                  </div>
                  <div className="post-stats">
                    <div className="stat">
                      <i className="far fa-heart"></i>
                      <span>16</span>
                    </div>
                    <div className="stat">
                      <i className="far fa-comment"></i>
                      <span>7</span>
                    </div>
                    <div className="stat">
                      <i className="far fa-eye"></i>
                      <span>98</span>
                    </div>
                  </div>
                  <div className="post-comments-section">
                    <h5 className="comments-title">Comentarios (7)</h5>
                    <div className="comment">
                      <img src="/api/placeholder/40/40" alt="Usuario" className="comment-avatar" />
                      <div className="comment-content">
                        <div className="comment-header">
                          <span className="comment-author">Laura Vega</span>
                          <span className="comment-date">Hace 1 día</span>
                        </div>
                        <p className="comment-text">Según mi veterinario, las obligatorias siguen siendo la trivalente felina y la antirrábica. La leucemia felina es recomendable dependiendo del estilo de vida del gato.</p>
                      </div>
                    </div>
                    <div className="add-comment">
                      <img src="/api/placeholder/40/40" alt="Tu avatar" className="comment-avatar" />
                      <textarea placeholder="Escribe un comentario..." className="comment-input"></textarea>
                      <button className="btn-comment">Comentar</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón para crear nueva publicación */}
              <button className="btn-new-post" data-toggle="modal" data-target="#newPostModal">
                <i className="fas fa-plus"></i> Nueva publicación
              </button>
            </div>

            {/* Barra lateral derecha */}
            <div className="col-lg-4">
              {/* Panel de comunidades */}
              <div className="sidebar-card communities-card">
                <h4 className="sidebar-card-title">Comunidades</h4>
                <div className="community-list">
                  <div className="community-item">
                    <img src="/api/placeholder/40/40" alt="Comunidad" className="community-icon" />
                    <div className="community-info">
                      <h6>Amantes de los Perros</h6>
                      <span>5.2k miembros</span>
                    </div>
                    <button className="btn-join-community">Unirse</button>
                  </div>
                  <div className="community-item">
                    <img src="/api/placeholder/40/40" alt="Comunidad" className="community-icon" />
                    <div className="community-info">
                      <h6>Gatos y Felinos</h6>
                      <span>4.8k miembros</span>
                    </div>
                    <button className="btn-join-community joined">Unido</button>
                  </div>
                  <div className="community-item">
                    <img src="/api/placeholder/40/40" alt="Comunidad" className="community-icon" />
                    <div className="community-info">
                      <h6>Mascotas Exóticas</h6>
                      <span>2.1k miembros</span>
                    </div>
                    <button className="btn-join-community">Unirse</button>
                  </div>
                  <div className="community-item">
                    <img src="/api/placeholder/40/40" alt="Comunidad" className="community-icon" />
                    <div className="community-info">
                      <h6>Veterinaria y Salud</h6>
                      <span>3.7k miembros</span>
                    </div>
                    <button className="btn-join-community">Unirse</button>
                  </div>
                </div>
                <a href="#" className="see-all-link">Ver todas las comunidades <i className="fas fa-arrow-right"></i></a>
              </div>

              {/* Panel de temas tendencia */}
              <div className="sidebar-card trending-card">
                <h4 className="sidebar-card-title">Tendencias</h4>
                <div className="trending-topics">
                  <div className="trending-topic">
                    <span className="trending-tag">#AdopciónResponsable</span>
                    <span className="trending-count">520 publicaciones</span>
                  </div>
                  <div className="trending-topic">
                    <span className="trending-tag">#AlimentaciónNatural</span>
                    <span className="trending-count">358 publicaciones</span>
                  </div>
                  <div className="trending-topic">
                    <span className="trending-tag">#EntrenamientoCanino</span>
                    <span className="trending-count">245 publicaciones</span>
                  </div>
                  <div className="trending-topic">
                    <span className="trending-tag">#CuidadoFelino</span>
                    <span className="trending-count">189 publicaciones</span>
                  </div>
                </div>
              </div>

              {/* Panel de usuarios activos */}
              <div className="sidebar-card active-users-card">
                <h4 className="sidebar-card-title">Usuarios Activos</h4>
                <div className="active-users">
                  <div className="user-item">
                    <img src="/api/placeholder/40/40" alt="Usuario" className="user-avatar" />
                    <div className="user-info">
                      <h6>Laura Torres</h6>
                      <span className="user-badge">Experto en Perros</span>
                    </div>
                  </div>
                  <div className="user-item">
                    <img src="/api/placeholder/40/40" alt="Usuario" className="user-avatar" />
                    <div className="user-info">
                      <h6>Carlos Méndez</h6>
                      <span className="user-badge">Veterinario</span>
                    </div>
                  </div>
                  <div className="user-item">
                    <img src="/api/placeholder/40/40" alt="Usuario" className="user-avatar" />
                    <div className="user-info">
                      <h6>Ana Gómez</h6>
                      <span className="user-badge">Entrenadora</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </div>

      {/* Modal para nueva publicación */}
      <div className="modal fade" id="newPostModal" tabIndex="-1" role="dialog" aria-labelledby="newPostModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newPostModalLabel">Crear Nueva Publicación</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="postCategory">Categoría</label>
                  <select className="form-control" id="postCategory">
                    <option>General</option>
                    <option>Consejos</option>
                    <option>Salud</option>
                    <option>Comportamiento</option>
                    <option>Alimentación</option>
                    <option>Adopción</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="postTitle">Título</label>
                  <input type="text" className="form-control" id="postTitle" placeholder="Un título claro y conciso" />
                </div>
                <div className="form-group">
                  <label htmlFor="postContent">Contenido</label>
                  <textarea className="form-control" id="postContent" rows="5" placeholder="Comparte tus ideas, preguntas o experiencias..."></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="postImage">Añadir imagen (opcional)</label>
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="postImage" />
                    <label className="custom-file-label" htmlFor="postImage">Elegir archivo</label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="postTags">Etiquetas (separadas por comas)</label>
                  <input type="text" className="form-control" id="postTags" placeholder="ej: perros, alimentación, salud" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary">Publicar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foro;