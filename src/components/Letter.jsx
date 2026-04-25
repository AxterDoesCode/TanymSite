import { useState } from "react";
import useReveal from "../hooks/useReveal.js";
import styles from "./Letter.module.css";

export default function Letter() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <section id="letter" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>The letter</p>
        <h2 className={styles.title}>A note, monthly.</h2>
        <p className={styles.body}>
          A short letter — once a month, never more. Field notes from the steppe, brewing observations,
          quiet announcements. You may unsubscribe at any time.
        </p>

        {submitted ? (
          <p className={styles.thanks}>Thank you. The letter will arrive.</p>
        ) : (
          <form
            className={styles.form}
            onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
          >
            <div>
              <label htmlFor="letter-email" className={styles.label}>Email</label>
              <input
                id="letter-email"
                type="email"
                required
                placeholder="aigerim@tanym.kz"
                className={styles.input}
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className={styles.submit}>
              Subscribe →
            </button>
          </form>
        )}

        <p className={styles.note}>No tracking. No referrals. Just the letter.</p>
      </div>
    </section>
  );
}
