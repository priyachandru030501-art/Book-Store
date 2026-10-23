
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <section className="contact-heading">
        <p className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</p>
        <h1>Let's start a conversation.</h1>
        <p>Questions about a book? Send us a message.</p>
      </section>

      <section className="contact-layout">
        <div className="contact-details">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Every good story starts with a hello.</h2>
          <p>Have a question, suggestion, or book recommendation? Fill out the form and let us know.</p>

          <div className="contact-detail-item">
            <span>01</span><div><strong>Email</strong><p>hello@bookhaven.example</p></div>
          </div>
          <div className="contact-detail-item">
            <span>02</span><div><strong>Opening Hours</strong><p>Monday – Saturday, 9 AM – 6 PM</p></div>
          </div>
          <div className="contact-detail-item">
            <span>03</span><div><strong>Our Promise</strong><p>We aim to respond within two business days.</p></div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>
          <label>Your Name<input required name="name" placeholder="Enter your name" /></label>
          <label>Email Address<input required type="email" name="email" placeholder="you@example.com" /></label>
          <label>Subject<select name="subject" defaultValue="Book enquiry"><option>Book enquiry</option><option>Order support</option><option>Suggestion</option><option>Other</option></select></label>
          <label>Your Message<textarea required name="message" rows="5" placeholder="Write your message here..." /></label>
          <button type="submit">Send Message →</button>
          {submitted && <p className="contact-success">Thank you! Your form was submitted in this demo.</p>}
          <small>This demo form does not send an actual email.</small>
        </form>
      </section>
    </main>
  );
}
