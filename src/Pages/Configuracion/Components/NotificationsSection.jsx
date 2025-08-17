import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotificationsSection.css';

const NotificationsSection = () => {
  const navigate = useNavigate();
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    push: true,
    reminders: true,
    promotions: false,
    news: false,
    messages: true
  });

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('petpedia-notification-settings')) || {};
    setNotificationSettings(prev => ({ ...prev, ...savedSettings }));
  }, []);

  useEffect(() => {
    localStorage.setItem('petpedia-notification-settings', JSON.stringify(notificationSettings));
  }, [notificationSettings]);

  const handleToggle = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleSave = () => {
    // Aquí podrías añadir lógica para guardar en tu backend
    alert('Configuraciones guardadas correctamente');
    navigate('/settings'); // Redirige de vuelta al menú de configuración
  };

  return (
    <div className="notifications-container">
      <h2 className="notifications-title">Configuración de Notificaciones</h2>
      
      <div className="notifications-list">
        <div className="notification-item">
          <div className="notification-info">
            <h3>Notificaciones por Email</h3>
            <p>Recibir alertas importantes por correo electrónico</p>
          </div>
          <label className="notification-switch">
            <input 
              type="checkbox" 
              checked={notificationSettings.email}
              onChange={() => handleToggle('email')}
            />
            <span className="notification-slider"></span>
          </label>
        </div>

        <div className="notification-item">
          <div className="notification-info">
            <h3>Notificaciones Push</h3>
            <p>Recibir alertas en tu dispositivo</p>
          </div>
          <label className="notification-switch">
            <input 
              type="checkbox" 
              checked={notificationSettings.push}
              onChange={() => handleToggle('push')}
            />
            <span className="notification-slider"></span>
          </label>
        </div>

        <div className="notification-item">
          <div className="notification-info">
            <h3>Recordatorios</h3>
            <p>Notificaciones para citas y recordatorios importantes</p>
          </div>
          <label className="notification-switch">
            <input 
              type="checkbox" 
              checked={notificationSettings.reminders}
              onChange={() => handleToggle('reminders')}
            />
            <span className="notification-slider"></span>
          </label>
        </div>

        <div className="notification-item">
          <div className="notification-info">
            <h3>Promociones</h3>
            <p>Ofertas especiales y descuentos</p>
          </div>
          <label className="notification-switch">
            <input 
              type="checkbox" 
              checked={notificationSettings.promotions}
              onChange={() => handleToggle('promotions')}
            />
            <span className="notification-slider"></span>
          </label>
        </div>

        <div className="notification-item">
          <div className="notification-info">
            <h3>Novedades</h3>
            <p>Actualizaciones y nuevas funcionalidades</p>
          </div>
          <label className="notification-switch">
            <input 
              type="checkbox" 
              checked={notificationSettings.news}
              onChange={() => handleToggle('news')}
            />
            <span className="notification-slider"></span>
          </label>
        </div>

        <div className="notification-item">
          <div className="notification-info">
            <h3>Mensajes</h3>
            <p>Notificaciones de nuevos mensajes</p>
          </div>
          <label className="notification-switch">
            <input 
              type="checkbox" 
              checked={notificationSettings.messages}
              onChange={() => handleToggle('messages')}
            />
            <span className="notification-slider"></span>
          </label>
        </div>
      </div>

      <div className="notifications-actions">
        <button 
          className="notifications-save-btn"
          onClick={handleSave}
        >
          Guardar Cambios
        </button>
        <button 
          className="notifications-cancel-btn"
          onClick={() => navigate('/settings')}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default NotificationsSection;