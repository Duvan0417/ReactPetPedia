import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Compra from './Pages/Compra/Compra';
import Inicio from './Pages/Home/Inicio';
// Importa el componente Carrito cuando lo tengas creado
// import Carrito from './Pages/Carrito/Carrito';

// Componentes temporales para las rutas que aún no tienes
const TempComponent = ({ title }) => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    marginLeft: '80px',
    flexDirection: 'column',
    background: '#f8f9fa'
  }}>
    <h1>🚧 {title}</h1>
    <p>Esta página está en construcción</p>
  </div>
);

function App() {
  return (
    <Compra/>
  );
}

export default App;