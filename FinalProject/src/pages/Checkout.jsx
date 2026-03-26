import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, setCart } = useOutletContext();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ name: "", email: "", address: "" });
  const [isSuccess, setIsSuccess] = useState(false);

  if (cart.length === 0 && !isSuccess) {
    return <h2 className="loading">Your cart is empty. Please add items first!</h2>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setCart([]); 
    
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  if (isSuccess) {
    return (
      <div className="checkout-success">
        <h2> Congratulations, {formData.name}</h2>
        <p>Your order has been confirmed and will be shipped to:</p>
        <p className="address-highlight">{formData.address}</p>
        <p className="redirect-msg">Redirecting you to the home page...</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Shipping & Payment Details</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input 
          required 
          type="text" 
          name="name" 
          placeholder="Full Name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        <input 
          required 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <textarea 
          required 
          name="address" 
          placeholder="Detailed Shipping Address" 
          value={formData.address} 
          onChange={handleChange}
        ></textarea>
        
        <button type="submit" className="add-btn submit-order">
          Confirm Order
        </button>
      </form>
    </div>
  );
}