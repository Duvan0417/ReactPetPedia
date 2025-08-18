import React, { useState } from "react";
import "./NotificationsSection.css";

const NotificationsSection = () => {
  const [preferences, setPreferences] = useState({
    system: true,
    newsletter: true,
    promotions: false,
  });

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="notifications-container">
      <h1>Notificaciones</h1>

      <div className="notifications-grid">
        {/* Notificación del sistema */}
        <div className="notification-card">
          <div className="notification-content">
            <h2>Notificaciones del sistema</h2>
            <p>Administración importantes sobre tu cuenta</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={preferences.system}
              onChange={() => togglePreference("system")}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* Boletín semanal */}
        <div className="notification-card">
          <div className="notification-content">
            <h2>Boletín semanal</h2>
            <p>Noticias y consejos sobre nuestras mascotas</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={preferences.newsletter}
              onChange={() => togglePreference("newsletter")}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* Promociones y ofertas */}
        <div className="notification-card">
          <div className="notification-content">
            <h2>Promociones y ofertas</h2>
            <p>Descuentos y ofertas especiales</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={preferences.promotions}
              onChange={() => togglePreference("promotions")}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSection;