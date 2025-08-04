import React from 'react';

const AppointmentModal = () => {
  return (
    <div className="modal fade" id="appointmentModal" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Programar Cita Veterinaria</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>Mascota</label>
                <select className="form-control">
                  <option>Selecciona tu mascota</option>
                  <option>Rocky (Perro)</option>
                  <option>Luna (Gato)</option>
                  <option>+ Agregar nueva mascota</option>
                </select>
              </div>
              <div className="form-group">
                <label>Tipo de consulta</label>
                <select className="form-control">
                  <option>Consulta general</option>
                  <option>Vacunación</option>
                  <option>Urgencia</option>
                  <option>Cirugía</option>
                  <option>Dermatología</option>
                </select>
              </div>
              <div className="form-group">
                <label>Fecha preferida</label>
                <input type="date" className="form-control" />
              </div>
              <div className="form-group">
                <label>Hora preferida</label>
                <select className="form-control">
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>4:00 PM</option>
                  <option>5:00 PM</option>
                </select>
              </div>
              <div className="form-group">
                <label>Notas adicionales</label>
                <textarea className="form-control" rows="3" placeholder="Describe brevemente el motivo de la consulta..."></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Cancelar
            </button>
            <button type="button" className="btn btn-primary">
              Confirmar Cita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;