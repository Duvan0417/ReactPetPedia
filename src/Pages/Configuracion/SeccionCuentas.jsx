import { Link } from 'react-router-dom';

export const SeccionCuentas = () => (
  <div className="config-group mb-5">
    <h3>Configuración de Cuenta</h3>
    <div className="list-group">
      <Link to="/settings/profile" className="list-group-item list-group-item-action">
        <i className="fas fa-user-circle me-2"></i> Perfil
      </Link>
      <Link to="/settings/notifications" className="list-group-item list-group-item-action">
        <i className="fas fa-bell me-2"></i> Notificaciones
      </Link>
      <Link to="/settings/privacy" className="list-group-item list-group-item-action">
        <i className="fas fa-lock me-2"></i> Privacidad
      </Link>
      <Link to="/settings/security" className="list-group-item list-group-item-action">
        <i className="fas fa-shield-alt me-2"></i> Seguridad
      </Link>
    </div>
  </div>
);