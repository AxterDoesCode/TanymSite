import markYurt from "../assets/mark-yurt.png";
import styles from "./Hero.module.css";

export default function Hero({ onOrder }) {
  return (
    <section id="top" className={styles.hero}>
      <div>
        <div className={styles.eyebrow}>Tary Blend · light roast</div>
        <h1 className={styles.title}>
          Tea and tary,<br />from the steppe.
        </h1>
        <hr className={styles.bronzeRule} aria-hidden="true" />
        <p className={styles.lede}>
          Black tea blended with roasted Kazakh millet. Traditionally shared, never rushed.
        </p>
        <div className={styles.ctaRow}>
          <button type="button" onClick={onOrder} className={styles.primary}>
            Order a tin
          </button>
          <a href="#ritual" className={styles.secondary}>
            Read the ritual →
          </a>
        </div>
      </div>

      <figure className={styles.figure}>
        <img src={markYurt} alt="Yurt and steppe horizon mark" />
        <figcaption>Almaty · Kazakhstan</figcaption>
      </figure>
    </section>
  );
}
