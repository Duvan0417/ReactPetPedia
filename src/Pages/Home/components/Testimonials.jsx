import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Gracias a Petpedia encontré a mi compañero perfecto. El proceso de adopción fue sencillo y me apoyaron en todo momento. Ahora Toby y yo somos inseparables.',
      author: 'Carlos Martínez',
      location: 'Madrid',
      image: '/api/placeholder/60/60',
    },
    {
      text: 'La tienda online tiene todo lo que mi gata necesita. Precios competitivos y envíos rápidos. El servicio al cliente es excelente, siempre resuelven mis dudas.',
      author: 'Ana López',
      location: 'Barcelona',
      image: '/api/placeholder/60/60',
    },
    {
      text: 'El servicio veterinario online me ha salvado en varias ocasiones. Pude consultar rápidamente cuando mi perro tenía un problema y recibí asesoramiento profesional inmediato.',
      author: 'Miguel Sánchez',
      location: 'Valencia',
      image: '/api/placeholder/60/60',
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Testimonios</h2>
          <p>Lo que dicen nuestros usuarios sobre su experiencia con Petpedia</p>
        </div>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-4" key={index}>
              <div className="testimonial-card">
                <div className="testimonial-quote">
                  <i className="fas fa-quote-right"></i>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-author-img">
                    <img src={testimonial.image} alt={testimonial.author} />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.location}</p>
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

export default Testimonials;