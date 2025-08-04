import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Importa todos los íconos sólidos

library.add(fas); // Registra todos los íconos sólidos en la biblioteca

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);