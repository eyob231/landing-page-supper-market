import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="products-page">
      <div className="container">
        <h2>All Products</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="product-grid">
            {products.map(product => (
              <div className="product-card" key={product._id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <button className="btn add-to-cart">Add to Cart</button>
                <Link to={`/products/${product._id}`} className="btn outline">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;