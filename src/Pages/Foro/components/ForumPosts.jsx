import React from 'react';
import { forumPosts } from '../../data/forumData'; // Importa los datos correctamente

const ForumPosts = () => {
  return (
    <div className="forum-posts">
      {forumPosts.map((post, index) => (
        <div className="post-card" key={index}>
          <div className="post-author">
            <img src={post.author.avatar} alt="Avatar" className="author-avatar" />
            <div className="author-info">
              <h6 className="author-name">{post.author.name}</h6>
              <span className="post-date">{post.date}</span>
            </div>
            <div className="post-category" data-category={post.category}>
              <i className={post.categoryIcon}></i> {post.category}
            </div>
          </div>
          <div className="post-content">
            <h4 className="post-title">{post.title}</h4>
            <p className="post-text">{post.text}</p>
            {post.image && (
              <div className="post-image">
                <img src={post.image} alt="Imagen del post" className="img-fluid rounded" />
              </div>
            )}
          </div>
          <div className="post-stats">
            <div className="stat">
              <i className="far fa-heart"></i>
              <span>{post.likes}</span>
            </div>
            <div className="stat">
              <i className="far fa-comment"></i>
              <span>{post.comments.length}</span>
            </div>
            <div className="stat">
              <i className="far fa-eye"></i>
              <span>{post.views}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForumPosts;