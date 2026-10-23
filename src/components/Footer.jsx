
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="book-footer">
      <h3>BOOKHAVEN</h3>
      <p>Discover your next favorite book.</p>

      <div className="book-footer-links">
        <Link to="/">Home</Link>
        <Link to="/books">Our Books</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <p className="book-copyright">
        © {new Date().getFullYear()} BOOKHAVEN. All rights reserved.
      </p>
    </footer>
  );
}
