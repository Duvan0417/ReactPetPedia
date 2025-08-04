import React from 'react';
import { activeUsers } from '../../data/forumData';

const ActiveUsersCard = () => {
  return (
    <div className="sidebar-card active-users-card">
      <h4 className="sidebar-card-title">Usuarios Activos</h4>
      <div className="active-users">
        {activeUsers.map((user, index) => (
          <div className="user-item" key={index}>
            <img src={user.avatar} alt="Usuario" className="user-avatar" />
            <div className="user-info">
              <h6>{user.name}</h6>
              <span className="user-badge">{user.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveUsersCard;