import { useEffect, useState } from "react";
import markYurt from "../assets/mark-yurt.png";
import wordmark from "../assets/wordmark.png";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { label: "The blend", href: "#blend" },
  { label: "Ritual",    href: "#ritual" },
  { label: "Origin",    href: "#origin" },
  { label: "Letter",    href: "#letter" },
];

export default function Header({ onOrder }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={styles.header} data-scrolled={scrolled}>
      <a href="#top" className={styles.brand} aria-label="TANYM home">
        <img className={styles.mark} src={markYurt} alt="" />
        <img className={styles.wordmark} src={wordmark} alt="TANYM" />
      </a>
      <nav className={styles.nav} aria-label="Primary">
        {NAV_ITEMS.map(({ label, href }) => (
          <a key={label} href={href} className={styles.navLink}>{label}</a>
        ))}
      </nav>
      <button type="button" onClick={onOrder} className={styles.order}>
        Order
      </button>
    </header>
  );
}
