import { Link } from 'react-router-dom';

export const SeccionCuentas = () => (
  <div className="config-group mb-5">
    <h3>Configuración de Cuenta</h3>
    <div className="list-group">
      
     <Link to="/ajustes/perfil" className="list-group-item list-group-item-action">
        <i className="fas fa-user-circle me-2"></i> Perfil
      </Link>
      <Link to="/ajustes/notificaciones" className="list-group-item list-group-item-action">
        <i className="fas fa-bell me-2"></i> Notificaciones
      </Link>
      <Link to="/ajustes/seguridadyprivacidad" className="list-group-item list-group-item-action">
        <i className="fas fa-lock me-2"></i> Seguridad y Privacidad 
      </Link>
      {/* <Link to="/ajustes/seguridad" className="list-group-item list-group-item-action">
        <i className="fas fa-shield-alt me-2"></i> Seguridad
      </Link> */}
    </div>
  </div>
);