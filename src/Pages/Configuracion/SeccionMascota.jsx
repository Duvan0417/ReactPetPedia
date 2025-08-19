import { Link } from 'react-router-dom';

export const SeccionMascota = () => (
  <div className="config-group">
    <h3>Configuración de Mascotas</h3>
    <div className="list-group">
      <Link to="/ajustes/mascotas" className="list-group-item list-group-item-action">
        <i className="fas fa-paw me-2"></i> Mis Mascotas
      </Link>
      <Link to="/settings/feeding" className="list-group-item list-group-item-action">
        <i className="fas fa-utensils me-2"></i> Alimentación
      </Link>
      <Link to="/settings/medical-history" className="list-group-item list-group-item-action">
        <i className="fas fa-file-medical me-2"></i> Historial Médico
      </Link>
      <Link to="/settings/care" className="list-group-item list-group-item-action">
        <i className="fas fa-heart me-2"></i> Cuidados
      </Link>
    </div>
  </div>
);