import markYurt from "../assets/mark-yurt.png";
import styles from "./Hero.module.css";

export default function Hero({ onOrder }) {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>Tary Blend · light roast</p>
        <h1 className={styles.title}>
          Tea and <em>tary</em>,<br />
          from the <span className={styles.accent}>steppe</span>.
        </h1>
        <hr className={styles.divider} aria-hidden="true" />
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
        <img className={styles.figureMark} src={markYurt} alt="Yurt and steppe horizon mark" />
        <hr className={styles.figureRule} aria-hidden="true" />
        <figcaption className={styles.figureMeta}>
          <span>Almaty · Kazakhstan</span>
          <span className={styles.quiet}>MMXXVI · No. 001</span>
        </figcaption>
      </figure>
    </section>
  );
}
