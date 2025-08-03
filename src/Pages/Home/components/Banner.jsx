import React from 'react';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1>Bienvenido a Petpedia</h1>
        <p>Tu portal completo para todo lo relacionado con mascotas. Adopta, compra productos, encuentra veterinarios y conecta con otros amantes de los animales.</p>
        <a href="/compra" className="btn btn-banner">Descubrir Ahora</a>
      </div>
    </div>
  );
};

export default Banner;