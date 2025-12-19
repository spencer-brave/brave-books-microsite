import { useState } from "react";
import styles from "../Sections/Email Modal/email-modal.module.css";

export default function EmailCollectionInput({ listId, id }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || success) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `${process.env.REACT_APP_BRAVE_BACKEND_URL}/klaviyo/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, listId }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to subscribe");
      }

      setSuccess(true);
      setEmail("");
    } catch (err) {
      console.log("Something went wrong. Try again?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.innerContent}>
      <form
        onSubmit={handleSubmit}
        className={`email-modal__form ${styles.form}`}
      >
        <input
          id={`email-collection-input-${id}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className={styles.input}
          disabled={loading || success}
        />

        <button
          type="submit"
          className={styles.submitButton}
          disabled={loading || success}
        >
          {loading ? "Loading..." : success ? "You're In!" : "Subscribe"}
        </button>
      </form>

      {success ? (
        <p className={styles.successMessage}>
          Thanks for subscribing! Check your inbox shortly.
        </p>
      ) : (
        <small>
          By subscribing, you acknowledge and agree to BRAVE Books'{" "}
          <a href="https://bravebooks.us/policies/terms-of-service">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="https://bravebooks.us/policies/privacy-policy">
            Privacy Policy
          </a>
          .
        </small>
      )}

      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}
