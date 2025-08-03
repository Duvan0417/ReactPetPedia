import React from 'react';
import Sidebar from '../../components/SideBar/SideBar';
import Footer from '../../components/Footer/Footer';
import Banner from './components/Banner';
import FeaturesSection from './components/FeaturesSection';
import FeaturedPets from './components/FeaturedPets';
import StatsSection from './components/StatsSection';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import Newsletter from './components/Newsletter';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className="inicio-container">
      <Sidebar /> {/* Sidebar siempre visible */}
      <div className="main-content">
        <Banner />
        <FeaturesSection />
        <FeaturedPets />
        <StatsSection />
        <Testimonials />
        <BlogSection />
        <Newsletter />
        <Footer /> {/* Footer siempre visible */}
      </div>
    </div>
  );
};

export default Inicio;