import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductCard = ({ product, delay, onAddToCart }) => {
  const renderRating = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="product-card animated" style={{ animationDelay: `${delay}s` }}>
        {product.badge && (
          <div className={`product-badge ${product.badge.type}`}>
            {product.badge.text}
          </div>
        )}
        
        <div className="product-image-container">
          <LazyLoadImage
            src={product.image}
            alt={product.name}
            className="product-image"
            effect="blur"
            width="100%"
            height="auto"
          />
          <button className="quick-view">Vista Rápida</button>
        </div>
        
        <div className="product-info">
          <div className="product-category">{product.category}</div>
          <h3 className="product-name">{product.name}</h3>
          
          <div className="rating">
            {renderRating()}
            <span className="ml-1" style={{ color: "#666", fontSize: "0.85rem" }}>
              ({product.reviews})
            </span>
          </div>
          
          <p className="product-description">{product.description}</p>
          
          <div className="product-price">
            ${product.price}
            {product.originalPrice && (
              <span className="product-original-price">${product.originalPrice}</span>
            )}
          </div>
          
          <div className="product-actions">
            <button 
              className="btn-add-cart"
              onClick={() => onAddToCart(product)}
              aria-label={`Añadir ${product.name} al carrito`}
            >
              <i className="fas fa-shopping-cart mr-2"></i>Añadir
            </button>
            <button 
              className="btn-wishlist"
              aria-label="Añadir a lista de deseos"
            >
              <i className="far fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;