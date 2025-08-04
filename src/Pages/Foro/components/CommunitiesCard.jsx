import React from 'react';
import { communities } from '../../data/forumData';

const CommunitiesCard = () => {
  return (
    <div className="sidebar-card communities-card">
      <h4 className="sidebar-card-title">Comunidades</h4>
      <div className="community-list">
        {communities.map((community, index) => (
          <div className="community-item" key={index}>
            <img src={community.icon} alt="Comunidad" className="community-icon" />
            <div className="community-info">
              <h6>{community.name}</h6>
              <span>{community.members} miembros</span>
            </div>
            <button className={`btn-join-community ${community.joined ? 'joined' : ''}`}>
              {community.joined ? 'Unido' : 'Unirse'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunitiesCard;