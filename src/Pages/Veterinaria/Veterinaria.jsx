import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from '../../components/SideBar/SideBar';
import Footer from '../../components/Footer/Footer';
import VetCards from './components/VetCards';
import PromoBanner from './components/PromoBanner';
import AppointmentModal from './components/AppointmentModal';
import './veterinaria.css';

const Veterinaria = () => {
  return (
    <div className="veterinaria-container">
      <Navbar />
      <Sidebar />
      <div className="container-fluid py-4">
        <VetCards />
        <PromoBanner />
      </div>
      <Footer />
      <AppointmentModal />
    </div>
  );
};

export default Veterinaria;