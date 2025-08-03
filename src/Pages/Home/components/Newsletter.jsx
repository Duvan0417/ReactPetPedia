import React from 'react';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h3>¡Suscríbete a nuestra newsletter!</h3>
          <p>Recibe las últimas noticias, consejos de cuidado para mascotas y ofertas exclusivas directamente en tu correo.</p>
          <form className="newsletter-form">
            <input type="email" className="newsletter-input" placeholder="Tu correo electrónico" required />
            <button type="submit" className="newsletter-btn">Suscribirse</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;