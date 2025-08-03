import React from 'react';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-paw"></i>
              </div>
              <div className="stat-count">2,580+</div>
              <div className="stat-title">Adopciones</div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-count">15,000+</div>
              <div className="stat-title">Usuarios</div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-clinic-medical"></i>
              </div>
              <div className="stat-count">350+</div>
              <div className="stat-title">Veterinarios</div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div className="stat-count">35+</div>
              <div className="stat-title">Ciudades</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;