import { Modal, Table, Button } from 'react-bootstrap';

const AppointmentHistoryModal = ({ show, onHide }) => {
  // Mock data for history
  const historyData = [
    {
      id: 1,
      date: "05/03/2025",
      pet: "Firulais",
      vet: "Dr. Pérez",
      reason: "Control general",
      status: "Completada"
    },
    {
      id: 2,
      date: "20/02/2025",
      pet: "Luna",
      vet: "Dra. Martínez",
      reason: "Desparasitación",
      status: "Completada"
    },
    {
      id: 3,
      date: "15/02/2025",
      pet: "Max",
      vet: "Dr. García",
      reason: "Problema dermatológico",
      status: "Completada"
    },
    {
      id: 4,
      date: "01/02/2025",
      pet: "Rocky",
      vet: "Dr. Torres",
      reason: "Limpieza dental",
      status: "Completada"
    },
    {
      id: 5,
      date: "15/01/2025",
      pet: "Gato Tigrado",
      vet: "Dr. López",
      reason: "Vacunación",
      status: "Completada"
    }
  ];

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Historial de Citas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="table-responsive">
          <Table hover>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Mascota</th>
                <th>Veterinario</th>
                <th>Motivo</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map(item => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.pet}</td>
                  <td>{item.vet}</td>
                  <td>{item.reason}</td>
                  <td>
                    <span className="badge badge-success">{item.status}</span>
                  </td>
                  <td>
                    <Button variant="outline-primary" size="sm">
                      Ver detalles
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
        <Button variant="primary">
          Exportar historial
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AppointmentHistoryModal;