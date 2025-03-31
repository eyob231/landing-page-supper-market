import React, { useState, useEffect } from 'react';



const ProductsPage = () => {
 const [cartItems, setCartItems] = useState([]); // State for items in the cart
  const [products, setProducts] = useState([]); // State for all products
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  // Fetch all products from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products); // Set all products
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Add to Cart Functionality
  const addToCart = (item) => {
    const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);

    if (itemExists) {
      // If the item exists, increase its quantity
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If the item doesn't exist, add it to the cart with a quantity of 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Remove from Cart Functionality
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Update Quantity Functionality
  const updateQuantity = (itemId, newQuantity) => {
    const quantity = parseInt(newQuantity, 10);
    if (quantity > 0) {
      setCartItems(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    } else {
      // If the quantity is 0 or invalid, remove the item from the cart
      removeFromCart(itemId);
    }
  };

  // Checkout Functionality
  const checkout = () => {
    alert('Checkout completed!');
    setCartItems([]); // Clear the cart
  };

  // Calculate Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Scroll to Cart Section
  const scrollToCart = () => {
    const cartSection = document.getElementById('cart-section');
    if (cartSection) {
      cartSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Header with Search Bar and Cart Link */}
      <header>
        <h1>Shopping Cart</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="cart-link" onClick={scrollToCart}>
          🛒 Cart ({cartItems.length})
        </div>
      </header>

      {/* Display All Products */}
      <h2>Products</h2>
      <ul className="product-list">
        {filteredProducts.map((item) => (
          <li key={item.id} className="product-item">
            <img src={item.thumbnail} alt={item.title} />
            <div className="product-details">
              <h2>{item.title}</h2>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Display Cart Items */}
      <h2 id="cart-section">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} />
              <div className="item-details">
                <h2>{item.title}</h2>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div className="item-actions">
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                <button
                  onClick={() =>
                    updateQuantity(item.id, prompt('Enter new quantity:'))
                  }
                >
                  Update Quantity
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Display Total Price */}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>

      {/* Checkout Button */}
      <button className="checkout-button" onClick={checkout}>
        Checkout
      </button>
    </div>
  );
}

export default ProductsPage;