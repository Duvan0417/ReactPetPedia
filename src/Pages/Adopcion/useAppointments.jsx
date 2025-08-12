import { useState, useEffect } from 'react';

const useAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Mock data - in a real app, this would come from an API
  const mockAppointments = [
    {
      id: 1,
      title: "Cita Regular",
      status: "confirmed",
      type: "next",
      pet: {
        name: "Firulais",
        type: "Perro",
        breed: "Labrador",
        age: 3,
        image: "/api/placeholder/60/60"
      },
      vet: "Dr. Pérez",
      date: "2025-04-10",
      time: "10:00",
      reason: "Vacunación anual",
      urgent: false
    },
    // ... other mock appointments
  ];

  const loadAppointments = () => {
    // In a real app, this would be an API call
    setAppointments(mockAppointments);
    setFilteredAppointments(mockAppointments);
  };

  const addAppointment = (newAppointment) => {
    const updatedAppointments = [...appointments, {
      ...newAppointment,
      id: appointments.length + 1
    }];
    setAppointments(updatedAppointments);
    filterAppointments(activeFilter, selectedDate, updatedAppointments);
  };

  const updateAppointment = (updatedAppointment) => {
    const updatedAppointments = appointments.map(appt => 
      appt.id === updatedAppointment.id ? updatedAppointment : appt
    );
    setAppointments(updatedAppointments);
    filterAppointments(activeFilter, selectedDate, updatedAppointments);
  };

  const cancelAppointment = (id) => {
    const updatedAppointments = appointments.filter(appt => appt.id !== id);
    setAppointments(updatedAppointments);
    filterAppointments(activeFilter, selectedDate, updatedAppointments);
  };

  const filterAppointments = (filter, date = selectedDate, appts = appointments) => {
    setActiveFilter(filter);
    if (date) setSelectedDate(date);
    
    let filtered = [...appts];
    
    switch(filter) {
      case 'upcoming':
        filtered = filtered.filter(appt => appt.type === 'next');
        break;
      case 'pending':
        filtered = filtered.filter(appt => appt.status === 'pending');
        break;
      case 'confirmed':
        filtered = filtered.filter(appt => appt.status === 'confirmed');
        break;
      case 'urgent':
        filtered = filtered.filter(appt => appt.urgent);
        break;
      case 'date':
        if (date) {
          filtered = filtered.filter(appt => appt.date === date);
        }
        break;
      default:
        // 'all' - no additional filtering
        break;
    }
    
    setFilteredAppointments(filtered);
  };

  const searchAppointments = (term) => {
    setSearchTerm(term);
    if (!term) {
      filterAppointments(activeFilter, selectedDate);
      return;
    }
    
    const filtered = appointments.filter(appt => 
      appt.pet.name.toLowerCase().includes(term.toLowerCase()) ||
      appt.vet.toLowerCase().includes(term.toLowerCase()) ||
      appt.reason.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilteredAppointments(filtered);
  };

  return {
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
  };
};

export default useAppointments;