import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Consejos para mantener a tu mascota saludable en verano',
      category: 'Salud',
      date: '12 May',
      image: '/api/placeholder/400/200',
      text: 'Descubre cómo proteger a tu mascota del calor y mantenerla hidratada durante los meses de verano...',
    },
    {
      title: 'Alimentos que nunca debes dar a tu perro',
      category: 'Nutrición',
      date: '5 May',
      image: '/api/placeholder/400/200',
      text: 'Algunos alimentos humanos pueden ser peligrosos para tu perro. Aprende cuáles debes evitar a toda costa...',
    },
    {
      title: 'Cómo entrenar a tu gato para usar el arenero',
      category: 'Comportamiento',
      date: '28 Abr',
      image: '/api/placeholder/400/200',
      text: 'Guía paso a paso para enseñar a tu gatito a usar correctamente el arenero desde el primer día...',
    },
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-title">
          <h2>Nuestro Blog</h2>
          <p>Artículos y consejos para el cuidado y bienestar de tus mascotas</p>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="blog-post">
                <div className="blog-img">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-date">{post.date}</div>
                </div>
                <div className="blog-content">
                  <div className="blog-category">{post.category}</div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-text">{post.text}</p>
                  <a href="#" className="blog-link">Leer más <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;