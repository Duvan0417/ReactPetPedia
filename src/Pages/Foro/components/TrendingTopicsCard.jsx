import React from 'react';
import { trendingTopics } from '../../data/forumData';

const TrendingTopicsCard = () => {
  return (
    <div className="sidebar-card trending-card">
      <h4 className="sidebar-card-title">Tendencias</h4>
      <div className="trending-topics">
        {trendingTopics.map((topic, index) => (
          <div className="trending-topic" key={index}>
            <span className="trending-tag">{topic.tag}</span>
            <span className="trending-count">{topic.count} publicaciones</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopicsCard;