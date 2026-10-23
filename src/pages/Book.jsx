
import { useState } from "react";
import "./Book.css";

const books = [
  { id: 1, title: "The Great Adventure", author: "John Smith", price: 299, category: "Fiction", color: "#536c59" },
  { id: 2, title: "Mindful Living", author: "Sarah Lee", price: 399, category: "Self Help", color: "#a66e4f" },
  { id: 3, title: "Mystery House", author: "David Brown", price: 349, category: "Mystery", color: "#718096" },
  { id: 4, title: "The Magic Garden", author: "Emma Wilson", price: 249, category: "Fantasy", color: "#77658d" },
  { id: 5, title: "Dream Big", author: "James Miller", price: 299, category: "Self Help", color: "#b28a4b" },
  { id: 6, title: "Hidden Secrets", author: "Olivia James", price: 449, category: "Mystery", color: "#37544a" },
];

export default function Books() {
  const [filter, setFilter] = useState("All");

  function addToCart(book) {
    const cart = JSON.parse(localStorage.getItem("bookhaven-cart") || "[]");
    const existing = cart.find((item) => item.id === book.id);

    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      cart.push({ ...book, quantity: 1 });
    }

    localStorage.setItem("bookhaven-cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("bookhaven-cart-updated"));
    alert(`${book.title} added to cart!`);
  }

  const categories = ["All", "Fiction", "Self Help", "Mystery", "Fantasy"];
  const filteredBooks =
    filter === "All"
      ? books
      : books.filter((book) => book.category === filter);

  return (
    <main className="book-page">
      <section className="book-heading">
        <p className="book-eyebrow">YOUR NEXT GREAT READ</p>
        <h1>Our Books</h1>
        <p>Discover stories that stay with you forever.</p>
      </section>

      <section className="book-content">
        <div className="book-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={filter === category ? "selected" : ""}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="book-grid">
          {filteredBooks.map((book) => (
            <article className="book-card" key={book.id}>
              <div
                className="book-cover"
                style={{ backgroundColor: book.color }}
              >
                <small>BOOKHAVEN</small>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <span>BOOKS & STORIES</span>
              </div>

              <div className="book-details">
                <span className="book-category">{book.category}</span>
                <h3>{book.title}</h3>
                <p>by {book.author}</p>

                <div className="book-purchase">
                  <strong>₹{book.price}</strong>
                  <button onClick={() => addToCart(book)}>
                    <i className="bi bi-bag-plus"></i> Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
