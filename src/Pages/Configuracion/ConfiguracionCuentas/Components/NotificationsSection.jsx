import React, { useState } from "react";
import "./NotificationsSection.css";

const NotificationsSection = () => {
  const [preferences, setPreferences] = useState({
    system: true,
    newsletter: true,
    promotions: false,
    emailUpdates: true,
    securityAlerts: true
  });

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="notifications-container">
      <h1 className="notifications-title">Notificaciones</h1>

      <div className="notifications-grid">
        {/* Notificación del sistema */}
        <div className="notification-card">
          <div className="notification-content">
            <div className="notification-icon">📱</div>
            <div>
              <h2>Notificaciones del sistema</h2>
              <p>Administración importantes sobre tu cuenta</p>
            </div>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={preferences.system}
              onChange={() => togglePreference("system")}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Boletín semanal */}
        <div className="notification-card">
          <div className="notification-content">
            <div className="notification-icon">📰</div>
            <div>
              <h2>Boletín semanal</h2>
              <p>Noticias y consejos sobre nuestras mascotas</p>
            </div>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={preferences.newsletter}
              onChange={() => togglePreference("newsletter")}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Promociones y ofertas */}
        <div className="notification-card">
          <div className="notification-content">
            <div className="notification-icon">🎁</div>
            <div>
              <h2>Promociones y ofertas</h2>
              <p>Descuentos y ofertas especiales</p>
            </div>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={preferences.promotions}
              onChange={() => togglePreference("promotions")}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Notificaciones por correo (nuevo) */}
        <div className="notification-card">
          <div className="notification-content">
            <div className="notification-icon">✉️</div>
            <div>
              <h2>Notificaciones por correo</h2>
              <p>Recibir actualizaciones y promociones</p>
            </div>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={preferences.emailUpdates}
              onChange={() => togglePreference("emailUpdates")}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Alertas de seguridad (nuevo) */}
        <div className="notification-card">
          <div className="notification-content">
            <div className="notification-icon">🔔</div>
            <div>
              <h2>Alertas de seguridad</h2>
              <p>Recibir notificaciones sobre actividad sospechosa</p>
            </div>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={preferences.securityAlerts}
              onChange={() => togglePreference("securityAlerts")}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSection;