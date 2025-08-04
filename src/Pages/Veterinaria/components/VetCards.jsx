import React from 'react';
import { vetClinics } from '../../../data/vetData'; // Importa datos dinámicos

const VetCards = () => {
  return (
    <div className="row vet-cards-container">
      {vetClinics.map((clinic, index) => (
        <div className="col-lg-4 col-md-6 mb-4" key={index}>
          <div className="vet-card">
            <div className="vet-card-header">
              <img src={clinic.image} alt={clinic.name} className="vet-image" />
              <div className="vet-badges">
                {clinic.badges.map((badge, idx) => (
                  <span className={`vet-badge ${badge.type}`} key={idx}>
                    {badge.text}
                  </span>
                ))}
              </div>
              <div className="vet-rating">
                {Array.from({ length: Math.floor(clinic.rating) }, (_, i) => (
                  <i className="fas fa-star" key={i}></i>
                ))}
                {clinic.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                <span>{clinic.rating}</span>
              </div>
            </div>
            <div className="vet-card-body">
              <h3 className="vet-name">{clinic.name}</h3>
              <p className="vet-location">
                <i className="fas fa-map-marker-alt"></i> {clinic.location}
              </p>
              <div className="vet-services">
                {clinic.services.map((service, idx) => (
                  <span className="service-tag" key={idx}>
                    <i className={service.icon}></i> {service.name}
                  </span>
                ))}
              </div>
              <p className="vet-description">{clinic.description}</p>
              <div className="vet-schedule">
                <div className="schedule-icon">
                  <i className="far fa-clock"></i>
                </div>
                <div className="schedule-text">
                  <p className={clinic.openNow ? 'open-now' : 'closed-now'}>
                    {clinic.openNow ? 'Abierto ahora' : 'Cerrado ahora'}
                  </p>
                  <p>{clinic.schedule}</p>
                </div>
              </div>
            </div>
            <div className="vet-card-footer">
              <a href="#" className="btn-primary-action">
                <i className="far fa-calendar-plus"></i> Pedir Cita
              </a>
              <div className="secondary-actions">
                <a href="#" className="btn-icon" title="Llamar">
                  <i className="fas fa-phone-alt"></i>
                </a>
                <a href="#" className="btn-icon" title="Ver en mapa">
                  <i className="fas fa-map-marked-alt"></i>
                </a>
                <a href="#" className="btn-icon" title="Favoritos">
                  <i className="far fa-heart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VetCards;