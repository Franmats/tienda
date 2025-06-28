import './NavBar.css';
import { Categorias } from './Categorias/Categorias';
import { useCart } from '../CartContext/CartContext';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Si usás React Router

export const NavBar = () => {
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
      

        {/* Hamburguesa */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
          {/* Logo */}
        <Link to="/" className="navbar-brand">
          <span className="brand-highlight">TODO</span>SHOP
        </Link>
      

        {/* Menú principal */}
        <div className={`navbar-content ${isMenuOpen ? 'active' : ''}`}>
          <div className="navbar-categories" onClick={closeMenu}>
            <Categorias />
          </div>

          
        </div>
          <div className="navbar-cart" onClick={closeMenu}>
            <Link to="/cart" className="cart-link">
              <FaShoppingCart className="cart-icon" />
              {getTotalItems() > 0 && (
                <span className="cart-badge">{getTotalItems()}</span>
              )}
  
            </Link>
          </div>
      </div>
    </nav>
  );
};