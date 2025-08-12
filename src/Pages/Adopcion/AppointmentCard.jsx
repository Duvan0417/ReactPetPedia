const AppointmentCard = ({ appointment, onEditClick, onCancelClick }) => {
  const getStatusColor = () => {
    switch(appointment.status) {
      case 'confirmed':
        return appointment.urgent ? 'var(--danger-color)' : 'var(--primary-color)';
      case 'pending':
        return 'var(--secondary-color)';
      case 'completed':
        return 'var(--success-color)';
      default:
        return '#6c757d';
    }
  };

  return (
    <div className="cita">
      <div 
        className="cita-header" 
        style={{ backgroundColor: getStatusColor() }}
      >
        <h5 className="mb-0">{appointment.title}</h5>
        <span className="cita-status">
          {appointment.status === 'confirmed' ? 'Confirmada' : 
           appointment.status === 'pending' ? 'Pendiente' : 'Completada'}
        </span>
      </div>
      
      {appointment.type === 'next' && (
        <div className="tag" style={appointment.urgent ? { backgroundColor: 'var(--danger-color)' } : null}>
          {appointment.urgent ? 'Urgente' : 'Próxima'}
        </div>
      )}
      
      <div className="cita-body animate__animated animate__fadeIn">
        <div className="pet-profile">
          <div className="pet-image">
            <img src={appointment.pet.image} alt={appointment.pet.name} />
          </div>
          <div className="pet-info">
            <h5>{appointment.pet.name}</h5>
            <p>{appointment.pet.type} · {appointment.pet.breed} · {appointment.pet.age} años</p>
          </div>
        </div>
        <div className="appointment-details">
          <div className="detail-item">
            <i className="fas fa-user-md"></i>
            <span className="detail-label">Veterinario:</span>
            <span className="detail-value">{appointment.vet}</span>
          </div>
          <div className="detail-item">
            <i className="fas fa-calendar"></i>
            <span className="detail-label">Fecha:</span>
            <span className="detail-value">{appointment.date}</span>
          </div>
          <div className="detail-item">
            <i className="fas fa-clock"></i>
            <span className="detail-label">Hora:</span>
            <span className="detail-value">{appointment.time}</span>
          </div>
          <div className="detail-item">
            <i className="fas fa-stethoscope"></i>
            <span className="detail-label">Motivo:</span>
            <span className="detail-value">{appointment.reason}</span>
          </div>
        </div>
      </div>
      <div className="cita-footer">
        <button 
          className="btn btn-outline-primary btn-sm" 
          onClick={() => onEditClick(appointment)}
        >
          <i className="fas fa-edit"></i> Editar
        </button>
        <button 
          className="btn btn-outline-danger btn-sm"
          onClick={() => onCancelClick(appointment.id)}
        >
          <i className="fas fa-times"></i> Cancelar
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;