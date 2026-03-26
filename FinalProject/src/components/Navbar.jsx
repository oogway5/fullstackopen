import { Link } from "react-router-dom";

export default function Navbar({ totalItems }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">✨ Luxe Store</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            Cart {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}