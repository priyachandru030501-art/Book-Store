
import { Link } from "react-router-dom";
import "./Home.css";

const categories = ["Fiction", "Self Growth", "Fantasy", "Romance"];

const featured = [
  { id: 1, title: "The Art of Growing", author: "Sarah Mitchell", price: 299, color: "#b97958" },
  { id: 2, title: "Little Things That Matter", author: "James Wilson", price: 349, color: "#344d3d" },
  { id: 3, title: "Find Your Wild", author: "Emily Carter", price: 399, color: "#718096" },
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-copy">
          <p className="eyebrow">✦ YOUR NEXT CHAPTER STARTS HERE</p>
          <h1>A world of stories,<span>one book away.</span></h1>
          <p className="home-intro">
            Discover stories that inspire, ideas that stay with you, and books
            that make ordinary days extraordinary.
          </p>
          <div className="home-actions">
            <Link className="primary-btn" to="/books">Explore Books →</Link>
            <Link className="text-btn" to="/about">Our Story</Link>
          </div>
          <div className="reader-note">
            <span className="note-icon">B</span>
            <div><strong>For every kind of reader</strong><p>Find a story that feels like yours.</p></div>
          </div>
        </div>

        <div className="home-art">
          <div className="art-circle"></div>
          <div className="art-books">
            <div className="art-book book-left">
              <small>THE ART OF</small><strong>GROWING</strong><span>one day at a time</span>
            </div>
            <div className="art-book book-middle">
              <small>THE LITTLE</small><strong>THINGS</strong><span>that matter</span>
            </div>
            <div className="art-book book-right">
              <small>FIND YOUR</small><strong>WILD</strong><span>and wonderful</span>
            </div>
          </div>
          <p className="art-caption">STORIES WORTH KEEPING</p>
        </div>
      </section>

      <section className="home-categories">
        <div className="section-heading">
          <p className="eyebrow">FIND YOUR NEXT READ</p>
          <h2>Explore by Category</h2>
          <p>Every mood has a story waiting for you.</p>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link to="/books" className="category-card" key={category}>
              <span>{["✧", "✦", "❋", "♡"][index]}</span>
              <h3>{category}</h3>
              <p>Find your next favorite read.</p>
              <strong>Explore →</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-featured">
        <div className="featured-heading">
          <div><p className="eyebrow">HANDPICKED FOR YOU</p><h2>Featured Books</h2></div>
          <Link to="/books" className="text-btn">View All Books →</Link>
        </div>
        <div className="featured-grid">
          {featured.map((book) => (
            <article className="featured-card" key={book.id}>
              <div className="featured-cover" style={{ "--cover": book.color }}>
                <small>BOOKHAVEN</small><span>✧</span><h3>{book.title}</h3><p>{book.author}</p>
              </div>
              <p className="featured-author">by {book.author}</p>
              <h3>{book.title}</h3>
              <div className="featured-bottom"><strong>₹{book.price}</strong><Link to="/books">View Book →</Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-story">
        <p className="eyebrow">A LITTLE PLACE FOR BIG STORIES</p>
        <h2>Every book opens a new world.</h2>
        <p>Discover stories that inspire new dreams, ideas, and possibilities.</p>
        <Link to="/about" className="story-btn">Discover Our Story →</Link>
      </section>
    </main>
  );
}
