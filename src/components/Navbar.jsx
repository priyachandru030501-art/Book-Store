import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="book-navbar">
      <Link to="/" className="book-logo">
        <i className="bi bi-book-half"></i> BOOKHAVEN
      </Link>

      <div className="book-nav-links">
        <Link to="/">Home</Link>
        <Link to="/books">Our Books</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <i className="bi bi-bag"></i> Cart
        </Link>
      </div>
    </nav>
  );
}