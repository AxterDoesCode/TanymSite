import wordmark from "../assets/wordmark.png";
import styles from "./Footer.module.css";

const COLUMNS = [
  { label: "Stockists", links: ["Almaty", "Astana", "London", "Paris"] },
  { label: "About",     links: ["The blend", "Origin", "Press"] },
  { label: "Quiet",     links: ["Letter", "Contact"] },
];

export default function Footer() {
  return (
    <footer id="stockists" className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <img src={wordmark} alt="TANYM" className={styles.brandWordmark} />
          <p className={styles.address}>Almaty, Kazakhstan.</p>
        </div>
        {COLUMNS.map((c) => (
          <div key={c.label}>
            <div className={styles.colLabel}>{c.label}</div>
            {c.links.map((l) => (
              <a key={l} href="#" className={styles.link}>{l}</a>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.colophon}>
        <span>© 2026 TANYM</span>
        <span>Tea and tary, from the steppe.</span>
      </div>
    </footer>
  );
}
