import React from 'react';

const ForumHeader = () => {
  return (
    <header className="forum-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="forum-title">Foro de la Comunidad PetPedia</h1>
            <p className="forum-subtitle">
              Comparte experiencias y conocimientos sobre mascotas con miles de amantes de los animales
            </p>
          </div>
          <div className="col-md-4">
            <div className="search-container">
              <input type="text" placeholder="Buscar en el foro" className="search-input" />
              <button className="btn-search">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ForumHeader;