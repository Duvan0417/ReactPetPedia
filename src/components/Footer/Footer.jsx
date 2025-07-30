import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import "../Footer/Footer.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sección de la empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mi App</h3>
            <p className="text-gray-400 text-sm">
              Creando experiencias digitales increíbles para usuarios de todo el mundo.
            </p>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-md font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          {/* Soporte */}
          <div>
            <h4 className="text-md font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Redes sociales */}
          <div>
            <h4 className="text-md font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Mi App. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;