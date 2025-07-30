import React from 'react';
import { Home, User, Settings, BookOpen, MessageCircle, LogOut } from 'lucide-react';
import "../SideBar/Sidebar.css"; // Assuming you have a CSS file for styling

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-center">Mi App</h2>
      </div>
      
      <nav className="space-y-2">
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
          <Home size={20} />
          <span>Inicio</span>
        </a>
        
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
          <User size={20} />
          <span>Perfil</span>
        </a>
        
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
          <BookOpen size={20} />
          <span>Proyectos</span>
        </a>
        
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
          <MessageCircle size={20} />
          <span>Mensajes</span>
        </a>
        
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
          <Settings size={20} />
          <span>Configuración</span>
        </a>
      </nav>
      
      <div className="mt-auto pt-8">
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors text-red-400">
          <LogOut size={20} />
          <span>Cerrar Sesión</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;