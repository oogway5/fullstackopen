import { useOutletContext, Link } from "react-router-dom";

export default function Cart() {
  const { cart, setCart } = useOutletContext();

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <h2 className="empty-cart">Your cart is currently empty. Start shopping!</h2>;
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} />
            <div className="item-details">
              <h4>{item.title}</h4>
              <p className="item-price">${item.price}</p>
            </div>
            <div className="item-actions">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span className="qty-display">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button className="delete-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <Link to="/checkout" className="checkout-btn">
          Continue to Checkout
        </Link>
      </div>
    </div>
  );
}