import { Link } from 'react-router-dom';

export const SeccionMascota = () => (
  <div className="config-group">
    <h3>Configuración de Mascotas</h3>
    <div className="list-group">
      <Link to="/settings/pets" className="list-group-item list-group-item-action">
        <i className="fas fa-paw me-2"></i> Mis Mascotas
      </Link>
      <Link to="/settings/vaccines" className="list-group-item list-group-item-action">
        <i className="fas fa-syringe me-2"></i> Vacunas
      </Link>
      <Link to="/settings/feeding" className="list-group-item list-group-item-action">
        <i className="fas fa-utensils me-2"></i> Alimentación
      </Link>
      <Link to="/settings/medical-history" className="list-group-item list-group-item-action">
        <i className="fas fa-file-medical me-2"></i> Historial Médico
      </Link>
      {/* Nuevos apartados agregados con íconos */}
      <Link to="/settings/appointments" className="list-group-item list-group-item-action">
        <i className="fas fa-calendar-check me-2"></i> Citas Veterinarias
      </Link>
      <Link to="/settings/care" className="list-group-item list-group-item-action">
        <i className="fas fa-heart me-2"></i> Cuidados
      </Link>
      <Link to="/settings/adoptions" className="list-group-item list-group-item-action">
        <i className="fas fa-home me-2"></i> Adopciones
      </Link>
    </div>
  </div>
);