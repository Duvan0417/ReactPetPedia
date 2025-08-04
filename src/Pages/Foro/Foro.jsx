import React from 'react';
import Sidebar from '../../components/SideBar/SideBar'; // Importa el Sidebar existente
import Footer from '../../components/Footer/Footer'; // Importa el Footer existente
import ForumHeader from './components/ForumHeader';
import ForumPosts from './components/ForumPosts';
import CommunitiesCard from './components/CommunitiesCard';
import TrendingTopicsCard from './components/TrendingTopicsCard';
import ActiveUsersCard from './components/ActiveUsersCard';
import './foro.css';

const Foro = () => {
  return (
    <div className="foro-container">
      <Sidebar /> {/* Sidebar siempre visible */}
      <div className="main-content">
        <ForumHeader />
        <div className="container mt-4">
          <div className="row">
            {/* Sección principal del foro */}
            <div className="col-lg-8">
              <ForumPosts />
            </div>
            {/* Barra lateral derecha */}
            <div className="col-lg-4">
              <CommunitiesCard />
              <TrendingTopicsCard />
              <ActiveUsersCard />
            </div>
          </div>
        </div>
        <Footer /> {/* Footer siempre visible */}
      </div>
    </div>
  );
};

export default Foro;