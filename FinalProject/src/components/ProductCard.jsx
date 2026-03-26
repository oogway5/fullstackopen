import { useState } from "react";

export default function ProductCard({ product, cart, setCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const addToCart = () => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    setQuantity(1); 
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      
      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          min="1"
        />
        <button onClick={handleIncrement}>+</button>
      </div>

      <button className="add-btn" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
}