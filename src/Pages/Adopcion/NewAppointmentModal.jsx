import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const NewAppointmentModal = ({ show, onHide, onSave }) => {
  const [formData, setFormData] = useState({
    pet: '',
    visitType: 'Regular - Consulta general',
    vet: '',
    date: '',
    time: '',
    reason: '',
    urgent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      title: formData.visitType.includes('Urgente') ? 'Cita Urgente' : 
             formData.visitType.includes('Especial') ? 'Cita Especial' : 'Cita Regular',
      status: 'pending',
      type: 'next',
      pet: {
        name: formData.pet.split(' (')[0],
        type: formData.pet.includes('Perro') ? 'Perro' : 'Gato',
        breed: formData.pet.split(' · ')[1].replace(')', ''),
        age: parseInt(formData.pet.split(' · ')[2]),
        image: "/api/placeholder/60/60"
      },
      vet: formData.vet.split(' - ')[0],
      date: formData.date,
      time: formData.time,
      reason: formData.reason,
      urgent: formData.urgent
    };
    onSave(newAppointment);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Programar Nueva Cita</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Seleccionar mascota</Form.Label>
            <Form.Control 
              as="select" 
              name="pet"
              value={formData.pet}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una mascota</option>
              <option>Firulais (Perro · Labrador · 3 años)</option>
              <option>Gato Tigrado (Gato · Europeo · 2 años)</option>
              <option>Rocky (Perro · Bull Terrier · 5 años)</option>
              <option>Luna (Gato · Persa · 1 año)</option>
              <option>Max (Perro · Golden Retriever · 4 años)</option>
              <option>+ Agregar nueva mascota</option>
            </Form.Control>
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Tipo de visita</Form.Label>
            <Form.Control 
              as="select" 
              name="visitType"
              value={formData.visitType}
              onChange={handleChange}
              required
            >
              <option>Regular - Consulta general</option>
              <option>Vacunación</option>
              <option>Emergencia</option>
              <option>Seguimiento</option>
              <option>Cirugía</option>
              <option>Peluquería y spa</option>
            </Form.Control>
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Veterinario</Form.Label>
            <Form.Control 
              as="select" 
              name="vet"
              value={formData.vet}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione un veterinario</option>
              <option>Dr. Pérez - Medicina General</option>
              <option>Dr. López - Cirugía</option>
              <option>Dr. García - Dermatología</option>
              <option>Dra. Martínez - Nutrición</option>
              <option>Dr. Torres - Odontología</option>
              <option>Sin preferencia</option>
            </Form.Control>
          </Form.Group>
          
          <Form.Row>
            <Form.Group as={Form.Col} md={6}>
              <Form.Label>Fecha</Form.Label>
              <Form.Control 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Form.Col} md={6}>
              <Form.Label>Hora</Form.Label>
              <Form.Control 
                type="time" 
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form.Row>
          
          <Form.Group>
            <Form.Label>Motivo de la visita</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Describe brevemente el motivo de la consulta..."
              required
            />
          </Form.Group>
          
          <Form.Group>
            <Form.Check 
              type="checkbox"
              label="Esta es una cita urgente"
              name="urgent"
              checked={formData.urgent}
              onChange={handleChange}
            />
          </Form.Group>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Programar Cita
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewAppointmentModal;