// src/components/ProfileSection.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSection = () => {
  const [profile, setProfile] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    celular: '',
    foto: null
  });
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile(prev => ({ ...prev, foto: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar los datos
    console.log('Perfil guardado:', profile);
    navigate('/ajustes');
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Editar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={profile.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              name="apellido"
              value={profile.apellido}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={profile.correo}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="celular" className="form-label">Celular</label>
          <input
            type="tel"
            className="form-control"
            id="celular"
            name="celular"
            value={profile.celular}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="foto" className="form-label">Foto de perfil</label>
          <input
            type="file"
            className="form-control"
            id="foto"
            accept="image/*"
            onChange={handleFileChange}
          />
          {preview && (
            <div className="mt-3">
              <img 
                src={preview} 
                alt="Vista previa" 
                className="img-thumbnail" 
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>
        
        <div className="d-flex justify-content-end gap-2">
          <button 
            type="button" 
            className="btn btn-outline-secondary"
            onClick={() => navigate('/ajustes')}
          >
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary">
            Guardar cambios
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProfileSection;