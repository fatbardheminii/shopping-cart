import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <Link to="/" className="logo">
        My Store
      </Link>
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={isMenuOpen ? "nav nav-open" : "nav"}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to="/shop" onClick={() => setIsMenuOpen(false)}>
          Shop
        </Link>
        <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
          <FaShoppingCart />
          <span>
            ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
