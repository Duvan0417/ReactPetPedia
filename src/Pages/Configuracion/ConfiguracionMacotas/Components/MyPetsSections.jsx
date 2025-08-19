import React, { useState } from "react";
import "./MyPetsSection.css";

const initialPets = [
  { id: 1, name: "Luna", type: "Perro", breed: "Labrador", age: "3 años", weight: "28kg", photo: "https://placedog.net/300/200?id=1" },
  { id: 3, name: "Milo", type: "Perro", breed: "Bulldog Francés", age: "4 años", weight: "14kg", photo: "https://placedog.net/300/200?id=2" },
  { id: 5, name: "Toby", type: "Perro", breed: "Golden Retriever", age: "5 años", weight: "32kg", photo: "https://placedog.net/300/200?id=3" },
];

const PetCard = ({ pet }) => (
  <div className="pet-card">
    <img src={pet.photo} alt={pet.name} className="pet-photo" />
    <div className="pet-info">
      <h3>{pet.name}</h3>
      <p>{pet.type} - {pet.breed}</p>
      <p><strong>Edad:</strong> {pet.age}</p>
      <p><strong>Peso:</strong> {pet.weight}</p>
    </div>
  </div>
);

const MyPetsSection = () => {
  const [pets, setPets] = useState(initialPets);
  const [showForm, setShowForm] = useState(false);
  const [newPet, setNewPet] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    weight: "",
    photo: ""
  });

  const handleChange = (e) => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPet({ ...newPet, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPet.name || !newPet.type || !newPet.breed || !newPet.age || !newPet.weight || !newPet.photo) {
      alert("Por favor completa todos los campos y sube una foto");
      return;
    }
    const petToAdd = { id: pets.length + 1, ...newPet };
    setPets([...pets, petToAdd]);
    setNewPet({ name: "", type: "", breed: "", age: "", weight: "", photo: "" });
    setShowForm(false);
  };

  return (
    <div className="mypets-container">
      <h2 className="section-title">🐾 Mis Mascotas</h2>

      <button className="btn-add" onClick={() => setShowForm(!showForm)}>
        {showForm ? "❌ Cancelar" : "➕ Añadir Mascota"}
      </button>

      {showForm && (
        <form className="pet-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Agregar nueva mascota</h3>
          
          <div className="photo-upload">
            {newPet.photo ? (
              <img src={newPet.photo} alt="Preview" className="preview-photo" />
            ) : (
              <p className="no-photo">Sin foto</p>
            )}
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
          </div>

          <div className="form-grid">
            <input type="text" name="name" placeholder="Nombre" value={newPet.name} onChange={handleChange} />
            <input type="text" name="type" placeholder="Tipo (Perro, Gato...)" value={newPet.type} onChange={handleChange} />
            <input type="text" name="breed" placeholder="Raza" value={newPet.breed} onChange={handleChange} />
            <input type="text" name="age" placeholder="Edad" value={newPet.age} onChange={handleChange} />
            <input type="text" name="weight" placeholder="Peso" value={newPet.weight} onChange={handleChange} />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={() => setShowForm(false)}>❌ Cancelar</button>
            <button type="submit" className="btn-save">✅ Guardar</button>
          </div>
        </form>
      )}

      <div className="pet-list">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default MyPetsSection;
