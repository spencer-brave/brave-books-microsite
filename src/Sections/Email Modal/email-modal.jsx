import { useEffect, useState } from "react";
import styles from "./email-modal.module.css";

export default function EmailCaptureModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest("[data-email-modal]");
      if (target) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${process.env.REACT_APP_BRAVE_BACKEND_URL}/klaviyo/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, listId: "WgVN8L" }),
      });

      if (!res.ok) {
        throw new Error("Failed to subscribe");
      } else {
        window.location.href =
          "https://bravebooks.us/discount/M-WELCOME15?redirect=/products/brave-book-club&utm_source=microsite&utm_medium=headless&utm_campaign=new-ads-account";
      }
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Try again?");
      setLoading(false);
    }
  };

  return (
    <>
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <img
              width="1000"
              height="1531"
              alt="A man sitting with his family reading a book"
              src="https://cdn.shopify.com/s/files/1/0564/9032/8257/files/BB_About_Family_Desktop_1.webp?v=1702669539"
            />

            <div className={styles.innerContent}>
              <h2 className={`text-center heading-sm ${styles.title}`}>
                Claim 15% Off Before You Join
              </h2>
              <p className={`text-center ${styles.subtitle}`}>
                Enter your email to receive 15% off your first order and
                subscribe to our email updates with news, promotions, and
                special offers.
              </p>
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className={styles.input}
                  disabled={loading}
                />

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Claim Your Discount"}
                </button>
              </form>

              {error && <p className={styles.errorMessage}>{error}</p>}
              <a
                className={`text-center ${styles.continueLink}`}
                href="https://bravebooks.us/products/brave-book-club?utm_source=microsite&utm_medium=headless&utm_campaign=new-ads-account"
              >
                <small>Continue to shop without a discount</small>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
