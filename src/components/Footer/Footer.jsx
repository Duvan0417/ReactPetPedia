import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const exploreLinks = [
    { path: '/inicio', text: 'Inicio' },
    { path: '/tienda', text: 'Tienda' },
    { path: '/veterinaria', text: 'Veterinaria' },
    { path: '/adopcion', text: 'Adopciones' }
  ];

  const supportLinks = [
    { path: '/ayuda', text: 'Centro de ayuda' },
    { path: '/contacto', text: 'Contacto' },
    { path: '/faq', text: 'FAQ' },
    { path: '/blog', text: 'Blog' }
  ];

  const policyLinks = [
    { path: '/terminos', text: 'Términos de uso' },
    { path: '/privacidad', text: 'Política de privacidad' },
    { path: '/cookies', text: 'Cookies' }
  ];

  const socialIcons = [
    { icon: 'fab fa-facebook-f', url: '#' },
    { icon: 'fab fa-twitter', url: '#' },
    { icon: 'fab fa-instagram', url: '#' },
    { icon: 'fab fa-youtube', url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>PetPedia</h5>
            <p>Tu plataforma integral para el cuidado y bienestar de tus mascotas.</p>
            <div className="social-icons">
              {socialIcons.map((social, index) => (
                <a 
                  href={social.url} 
                  key={index}
                  aria-label={`${social.icon.split('-')[1]} social link`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-md-2">
            <h5>Explorar</h5>
            <ul className="footer-links">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-md-2">
            <h5>Soporte</h5>
            <ul className="footer-links">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-md-4">
            <h5>Suscríbete a nuestro boletín</h5>
            <p>Mantente al día con las últimas noticias y consejos para tus mascotas.</p>
            <div className="footer-newsletter">
              <input type="email" placeholder="Tu email" />
              <button type="submit" aria-label="Suscribirse">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; 2025 PetPedia. Todos los derechos reservados.</p>
          <ul className="policy-links">
            {policyLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;