import React, { useState } from 'react';
import './SecurityPrivacy.css';

const SecurityPrivacy = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [locationAccess, setLocationAccess] = useState(true);

  const handleTwoFactorToggle = () => setTwoFactorEnabled(!twoFactorEnabled);
  const handleLocationToggle = () => setLocationAccess(!locationAccess);

  return (
    <div className="security-container">
      <h1 className="security-title">Seguridad y Privacidad</h1>

      {/* Contraseña */}
      <div className="security-option">
        <div className="option-content">
          <div className="option-icon">🔑</div>
          <div>
            <h3 className="option-title">Contraseña</h3>
            <p className="option-description">Actualizada hace 3 meses</p>
          </div>
        </div>
        <button className="action-btn">Cambiar</button>
      </div>

      {/* Verificación en dos pasos */}
      <div className="security-option">
        <div className="option-content">
          <div className="option-icon">📱</div>
          <div>
            <h3 className="option-title">Verificación en dos pasos</h3>
            <p className="option-description">{twoFactorEnabled ? 'Activada' : 'Desactivada'}</p>
          </div>
        </div>
        <label className="switch">
          <input 
            type="checkbox" 
            checked={twoFactorEnabled}
            onChange={handleTwoFactorToggle}
          />
          <span className="slider round"></span>
        </label>
      </div>

      {/* Historial de inicio de sesión */}
      <div className="security-option">
        <div className="option-content">
          <div className="option-icon">🕒</div>
          <div>
            <h3 className="option-title">Historial de inicio de sesión</h3>
            <p className="option-description">5 dispositivos conectados</p>
          </div>
        </div>
        <button className="action-btn">Ver</button>
      </div>

      {/* Acceso a ubicación */}
      <div className="security-option">
        <div className="option-content">
          <div className="option-icon">📍</div>
          <div>
            <h3 className="option-title">Acceso a ubicación</h3>
            <p className="option-description">Compartir ubicación con servicios</p>
          </div>
        </div>
        <label className="switch">
          <input 
            type="checkbox" 
            checked={locationAccess}
            onChange={handleLocationToggle}
          />
          <span className="slider round"></span>
        </label>
      </div>

      {/* Cerrar sesión en todos los dispositivos */}
      <div className="security-option danger">
        <div className="option-content">
          <div className="option-icon">🚫</div>
          <div>
            <h3 className="option-title">Cerrar sesión en todos los dispositivos</h3>
            <p className="option-description">Terminar todas las sesiones activas</p>
          </div>
        </div>
        <button className="action-btn danger">Cerrar sesiones</button>
      </div>

      {/* Eliminar cuenta */}
      <div className="security-option danger">
        <div className="option-content">
          <div className="option-icon">❌</div>
          <div>
            <h3 className="option-title">Eliminar cuenta</h3>
            <p className="option-description">Borrar permanentemente tu cuenta</p>
          </div>
        </div>
        <button className="action-btn danger">Eliminar</button>
      </div>
    </div>
  );
};

export default SecurityPrivacy;
