import React from 'react';
import { featuredPets } from '../../../data/featuredPets';

const FeaturedPets = () => {
  return (
    <section className="featured-pets">
      <div className="container">
        <div className="section-title">
          <h2>Mascotas en Adopción</h2>
          <p>Estas adorables mascotas están esperando encontrar un hogar.</p>
        </div>
        <div className="row">
          {featuredPets.map((pet, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="pet-card">
                <div className="pet-card-img">
                  <img src={pet.image} alt={pet.name} />
                  <div className="pet-tag">{pet.type}</div>
                </div>
                <div className="pet-card-content">
                  <h3 className="pet-name">{pet.name}</h3>
                  <div className="pet-details">
                    <span><i className="fas fa-calendar-alt"></i> {pet.age}</span>
                    <span><i className="fas fa-map-marker-alt"></i> {pet.location}</span>
                    <span><i className="fas fa-venus-mars"></i> {pet.gender}</span>
                  </div>
                  <p className="pet-description">{pet.description}</p>
                  <div className="pet-actions">
                    <a href="/adopcion" className="btn btn-pet btn-adopt">Adoptar</a>
                    <a href="/adopcion" className="btn btn-pet btn-info">Más Info</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;