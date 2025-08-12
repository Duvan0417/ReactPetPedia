const Header = () => {
  return (
    <header className="main-header">
      <div className="header-title">
        <i className="fas fa-calendar-check"></i>
        <h2 className="mb-0">Gestión de Citas</h2>
      </div>
      <div className="user-profile">
        <div className="notifications">
          <i className="fas fa-bell"></i>
          <div className="notification-badge">3</div>
        </div>
        <div className="user-avatar">
          M
        </div>
        <div className="user-info">
          <h6 className="mb-0">María García</h6>
          <small>Propietario</small>
        </div>
      </div>
    </header>
  );
};

export default Header;