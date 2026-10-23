
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("bookhaven-cart") || "[]");
  } catch {
    return [];
  }
}

export default function Cart() {
  const [cart, setCart] = useState(getCart);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  useEffect(() => {
    function syncCart() {
      setCart(getCart());
    }
    window.addEventListener("bookhaven-cart-updated", syncCart);
    window.addEventListener("storage", syncCart);
    return () => {
      window.removeEventListener("bookhaven-cart-updated", syncCart);
      window.removeEventListener("storage", syncCart);
    };
  }, []);

  function saveCart(nextCart) {
    setCart(nextCart);
    localStorage.setItem("bookhaven-cart", JSON.stringify(nextCart));
    window.dispatchEvent(new Event("bookhaven-cart-updated"));
  }

  function changeQuantity(id, amount) {
    const nextCart = cart
      .map((item) => item.id === id
        ? { ...item, quantity: Math.max(1, (item.quantity || 1) + amount) }
        : item
      );
    saveCart(nextCart);
  }

  function removeBook(id) {
    saveCart(cart.filter((item) => item.id !== id));
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1), 0
  );

  return (
    <main className="cart-page">
      <header className="cart-heading">
        <p className="eyebrow">YOUR PERSONAL BOOKSHELF</p>
        <h1>Your Cart</h1>
        <p>Your next favorite story could be right here.</p>
      </header>

      {cart.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-cart-icon">B</div>
          <h2>Your cart is waiting for a story.</h2>
          <p>You haven't added any books yet. Explore our collection!</p>
          <Link to="/books" className="cart-primary-btn">Explore Books →</Link>
        </section>
      ) : (
        <section className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <div className="cart-mini-cover" style={{ "--cover": item.color || "#344d3d" }}>
                  <small>BOOKHAVEN</small>
                  <strong>{item.title}</strong>
                </div>

                <div className="cart-item-info">
                  <span>{item.category || "Book"}</span>
                  <h2>{item.title}</h2>
                  <p>by {item.author}</p>
                  <strong>₹{item.price}</strong>

                  <div className="quantity-control">
                    <button onClick={() => changeQuantity(item.id, -1)} aria-label="Decrease quantity">−</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => changeQuantity(item.id, 1)} aria-label="Increase quantity">+</button>
                  </div>

                  <button className="remove-book" onClick={() => removeBook(item.id)}>Remove</button>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div><span>Books</span><span>{cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}</span></div>
            <div><span>Subtotal</span><span>₹{total}</span></div>
            <div><span>Delivery</span><span>Free</span></div>
            <hr />
            <div className="cart-total"><strong>Total</strong><strong>₹{total}</strong></div>
            <button
              className="checkout-btn"
              onClick={() => setCheckoutMessage("Checkout is a demo feature. No payment has been made.")}
            >
              Proceed to Checkout →
            </button>
            {checkoutMessage && <p className="checkout-message">{checkoutMessage}</p>}
            <Link to="/books" className="continue-shopping">Continue Shopping</Link>
          </aside>
        </section>
      )}
    </main>
  );
}
