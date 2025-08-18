import { useState, useRef } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaTimes, FaCheck, FaCamera } from 'react-icons/fa';
import './ProfileSection.css';

const ProfileSection = () => {
  const [profile, setProfile] = useState({
    nombre: "María García Rodríguez",
    email: "m.stap@email.com",
    telefono: "+34 67 345 878",
    direccion: "CIBR Principal 123, Madrid, España",
    foto: "/default-avatar.jpg" 
  });
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, foto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Información personal</h2>
        <p>Administra los detalles de tu perfil</p>
      </div>

      <div className="profile-card">
        <div className="profile-card-header">
          <h3>Datos personales</h3>
          {isEditing ? (
            <div className="profile-actions">
              <button className="btn-cancel" onClick={() => setIsEditing(false)}>
                <FaTimes /> Cancelar
              </button>
              <button className="btn-save" onClick={handleSubmit}>
                <FaCheck /> Guardar
              </button>
            </div>
          ) : (
            <button className="btn-edit" onClick={() => setIsEditing(true)}>
              <FaEdit /> Editar
            </button>
          )}
        </div>

        <div className="profile-content">
          {/* Sección de foto de perfil */}
          <div className="profile-photo-section">
            <div className="profile-photo-container">
              <img 
                src={profile.foto} 
                alt="Foto de perfil" 
                className="profile-photo"
              />
              {isEditing && (
                <div className="photo-edit-overlay" onClick={triggerFileInput}>
                  <FaCamera className="camera-icon" />
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    style={{ display: 'none' }}
                  />
                </div>
              )}
            </div>
            {isEditing && (
              <button 
                className="btn-change-photo" 
                onClick={triggerFileInput}
              >
                Cambiar foto
              </button>
            )}
          </div>

          {/* Campos del perfil */}
          <div className="profile-fields">
            <div className="profile-field">
              <div className="field-icon">
                <FaUser />
              </div>
              <div className="field-content">
                <label>Nombre</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="nombre"
                    value={profile.nombre}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{profile.nombre}</p>
                )}
              </div>
            </div>

            <div className="profile-field">
              <div className="field-icon">
                <FaEnvelope />
              </div>
              <div className="field-content">
                <label>Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{profile.email}</p>
                )}
              </div>
            </div>

            <div className="profile-field">
              <div className="field-icon">
                <FaPhone />
              </div>
              <div className="field-content">
                <label>Teléfono</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="telefono"
                    value={profile.telefono}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{profile.telefono}</p>
                )}
              </div>
            </div>

            <div className="profile-field">
              <div className="field-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="field-content">
                <label>Dirección</label>
                {isEditing ? (
                  <textarea
                    name="direccion"
                    value={profile.direccion}
                    onChange={handleChange}
                    rows="2"
                  />
                ) : (
                  <p>{profile.direccion}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;