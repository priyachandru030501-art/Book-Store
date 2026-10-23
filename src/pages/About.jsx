
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="eyebrow">THE STORY BEHIND THE SHELVES</p>
        <h1>More than books.<span>A world of possibilities.</span></h1>
        <p>We bring readers and wonderful stories together, one page at a time.</p>
      </section>

      <section className="about-main">
        <div className="about-illustration">
          <div className="about-sun"></div>
          <div className="about-book about-book-one">READ<br />DREAM</div>
          <div className="about-book about-book-two">LEARN<br />GROW</div>
          <div className="about-plant">✦</div>
        </div>

        <div className="about-copy">
          <p className="eyebrow">WELCOME TO BOOKHAVEN</p>
          <h2>Every reader deserves a special story.</h2>
          <p>
            BOOKHAVEN began with a simple idea: books should help us explore
            new places, understand different people, and see life in new ways.
          </p>
          <p>
            Our collection brings together fiction, fantasy, romance, mystery,
            and personal growth books for curious readers at every stage.
          </p>
          <Link to="/books" className="about-button">Explore Our Collection →</Link>
        </div>
      </section>

      <section className="about-values">
        <div className="section-heading">
          <p className="eyebrow">WHAT WE BELIEVE</p>
          <h2>Our Little Reading Philosophy</h2>
        </div>
        <div className="values-grid">
          <article><span>01</span><h3>Stories Matter</h3><p>Every story gives us a chance to imagine something new.</p></article>
          <article><span>02</span><h3>Keep Discovering</h3><p>There is always something more to learn and explore.</p></article>
          <article><span>03</span><h3>Readers First</h3><p>We want finding your next favorite book to feel simple.</p></article>
        </div>
      </section>
    </main>
  );
}
