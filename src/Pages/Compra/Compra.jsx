import React, { useState, useEffect } from 'react';
import { productsData } from '../../data/products';
import Sidebar from '../../components/SideBar/SideBar';
import Navbar from '../../components/Navbar/Navbar';
import PromoBanner from '../../components/PromoBanner/PromoBanner';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './compra.css';

const Compra = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(productsData);
      setFilteredProducts(productsData);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let results = products;

    if (searchTerm) {
      results = results.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeCategory !== 'all') {
      results = results.filter(product => 
        product.petCategory === activeCategory
      );
    }

    setFilteredProducts(results);
  }, [searchTerm, activeCategory, products]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const categories = [
    { id: 'all', icon: 'fas fa-th', name: 'Todos' },
    { id: 'dog', icon: 'fas fa-dog', name: 'Perros' },
    { id: 'cat', icon: 'fas fa-cat', name: 'Gatos' },
    { id: 'fish', icon: 'fas fa-fish', name: 'Peces' },
    { id: 'bird', icon: 'fas fa-feather', name: 'Aves' },
    { id: 'small', icon: 'fas fa-rabbit', name: 'Pequeños mamíferos' },
    { id: 'premium', icon: 'fas fa-certificate', name: 'Premium' }
  ];

  return (
    <div className="compra-container">
      <Sidebar />
      
      <div className="main-content">
        <Navbar 
          cartItemsCount={cartItems.length} 
          onSearch={setSearchTerm} 
        />
        
        <PromoBanner />
        
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={category.icon}></i> {category.name}
            </button>
          ))}
        </div>
        
        <h2 className="section-title">Productos Populares</h2>
        
        {isLoading ? (
          <div className="loading-spinner">
            <i className="fas fa-spinner fa-spin"></i> Cargando productos...
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <p>No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        ) : (
          <div className="row">
            {filteredProducts.slice(0, 4).map((product, index) => (
              <ProductCard 
                key={product.id}
                product={product}
                delay={index * 0.1}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}

        <h2 className="section-title">Ofertas Especiales</h2>
        
        <div className="row">
          {filteredProducts
            .filter(product => product.badge?.type === 'sale')
            .slice(0, 4)
            .map((product, index) => (
              <ProductCard 
                key={product.id}
                product={product}
                delay={index * 0.1}
                onAddToCart={addToCart}
              />
            ))}
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Compra;
