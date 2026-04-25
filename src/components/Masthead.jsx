import styles from "./Masthead.module.css";

export default function Masthead() {
  return (
    <div className={styles.strip} aria-label="Edition">
      <div className={styles.row}>
        <div className={styles.cell}>MMXXVI · Almaty</div>
        <div className={`${styles.cell} ${styles.dot}`} aria-hidden="true" />
        <div className={`${styles.cell} ${styles.center} ${styles.edition}`}>Tary Blend · No. 001</div>
        <div className={`${styles.cell} ${styles.dot}`} aria-hidden="true" />
        <div className={`${styles.cell} ${styles.right}`}>Light roast · 80g</div>
      </div>
    </div>
  );
}
