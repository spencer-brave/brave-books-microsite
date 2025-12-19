import { useState } from "react";
import styles from "../Sections/Email Modal/email-modal.module.css";

export default function EmailCollectionInput({listId, id}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log(email, listId);
      const res = await fetch(
        `${process.env.REACT_APP_BRAVE_BACKEND_URL}/klaviyo/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, listId: listId }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to subscribe");
      }
      setEmail("");
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Try again?");
      setLoading(false);
    }
  };

  return (
    <div className={styles.innerContent}>
      <form onSubmit={handleSubmit} className={`email-modal__form ${styles.form}`}>
        <input
          id={`email-collection-input-${id}`}
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
          {loading ? "Loading..." : "Subscribe"}
        </button>
      </form>
      <small>By subscribing, you acknowledge and agree to BRAVE Books' <a href="https://bravebooks.us/policies/terms-of-service">Terms of Use</a> and <a href="https://bravebooks.us/policies/privacy-policy">Privacy Policy</a>.</small>

      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}
