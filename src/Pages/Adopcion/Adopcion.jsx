import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AppointmentCard from './components/AppointmentCard';
import Calendar from './components/Calendar';
import NewAppointmentModal from './components/NewAppointmentModal';
import EditAppointmentModal from './components/EditAppointmentModal';
import AppointmentHistoryModal from './components/AppointmentHistoryModal';
import Footer from './components/Footer';
import useAppointments from './hooks/useAppointments';
import './styles/App.css';

function Adopcion() {
  const {
    appointments,
    filteredAppointments,
    activeFilter,
    setActiveFilter,
    searchTerm,
    setSearchTerm,
    selectedDate,
    setSelectedDate,
    loadAppointments,
    addAppointment,
    updateAppointment,
    cancelAppointment,
    filterAppointments,
    searchAppointments
  } = useAppointments();

  const [showNewModal, setShowNewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(null);

  useEffect(() => {
    loadAppointments();
  }, []);

  const handleEditClick = (appointment) => {
    setCurrentAppointment(appointment);
    setShowEditModal(true);
  };

  const handleSaveAppointment = (updatedAppointment) => {
    updateAppointment(updatedAppointment);
    setShowEditModal(false);
  };

  const handleAddAppointment = (newAppointment) => {
    addAppointment(newAppointment);
    setShowNewModal(false);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content-wrapper">
        <Header />
        <main className="main-content">
          <div className="page-title">
            <h3>Mis Citas Veterinarias</h3>
            <div className="action-buttons">
              <button 
                className="btn btn-outline" 
                onClick={() => setShowHistoryModal(true)}
              >
                <i className="fas fa-history"></i> Historial
              </button>
              <button 
                className="btn btn-action" 
                onClick={() => setShowNewModal(true)}
              >
                <i className="fas fa-plus"></i> Nueva Cita
              </button>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="filter-section">
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input 
                type="text" 
                placeholder="Buscar citas, mascotas o veterinarios..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  searchAppointments(e.target.value);
                }}
              />
            </div>
            <div className="filters">
              <button 
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => filterAppointments('all')}
              >
                Todas
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'upcoming' ? 'active' : ''}`}
                onClick={() => filterAppointments('upcoming')}
              >
                Próximas
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'pending' ? 'active' : ''}`}
                onClick={() => filterAppointments('pending')}
              >
                Pendientes
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'confirmed' ? 'active' : ''}`}
                onClick={() => filterAppointments('confirmed')}
              >
                Confirmadas
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'urgent' ? 'active' : ''}`}
                onClick={() => filterAppointments('urgent')}
              >
                Urgentes
              </button>
              <div className="date-filter">
                <label>Filtrar por fecha:</label>
                <input 
                  type="date" 
                  className="form-control-sm"
                  value={selectedDate}
                  onChange={(e) => {
                    setSelectedDate(e.target.value);
                    filterAppointments('date', e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Appointments Grid */}
          <div className="citas-grid">
            {filteredAppointments.map(appointment => (
              <AppointmentCard 
                key={appointment.id}
                appointment={appointment}
                onEditClick={handleEditClick}
                onCancelClick={cancelAppointment}
              />
            ))}
          </div>

          {/* Calendar */}
          <Calendar 
            appointments={appointments}
            selectedDate={selectedDate}
            onDateSelect={(date) => {
              setSelectedDate(date);
              filterAppointments('date', date);
            }}
          />
        </main>
      </div>

      {/* Modals */}
      <NewAppointmentModal 
        show={showNewModal}
        onHide={() => setShowNewModal(false)}
        onSave={handleAddAppointment}
      />
      
      <EditAppointmentModal 
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        onSave={handleSaveAppointment}
        appointment={currentAppointment}
      />
      
      <AppointmentHistoryModal 
        show={showHistoryModal}
        onHide={() => setShowHistoryModal(false)}
      />

      <Footer />
    </div>
  );
}

export default Adopcion;