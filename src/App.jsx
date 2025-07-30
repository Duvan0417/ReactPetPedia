import React from 'react';
import Sidebar from '../src/components/SideBar/SideBar';
import Veterinaria from './components/Veterinaria/Veterinaria';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          <Veterinaria />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;