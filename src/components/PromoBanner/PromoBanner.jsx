import React from 'react';

const PromoBanner = () => {
  return (
    <div className="promo-banner animated">
      <div className="promo-content">
        <h2 className="promo-title">¡Semana de mascotas felices!</h2>
        <p className="promo-text">
          Hasta 40% de descuento en productos seleccionados para el cuidado y diversión de tus mejores amigos.
        </p>
        <button className="btn-promo">Ver ofertas</button>
      </div>
    </div>
  );
};

export default PromoBanner;