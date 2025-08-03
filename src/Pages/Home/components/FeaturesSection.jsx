import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>Descubre todo lo que Petpedia puede ofrecerte a ti y a tu mascota</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-paw"></i>
              </div>
              <h3>Adopciones</h3>
              <p>Encuentra tu compañero perfecto entre cientos de mascotas que buscan un hogar amoroso.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h3>Tienda</h3>
              <p>Productos de calidad para el cuidado y bienestar de tu mascota.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-clinic-medical"></i>
              </div>
              <h3>Veterinaria</h3>
              <p>Conecta con los mejores veterinarios de tu zona.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;