import { useEffect, useRef } from "react";
import styles from "./OrderPanel.module.css";

export default function OrderPanel({ open, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    panelRef.current?.querySelector("input, textarea")?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.scrim} onClick={onClose} role="dialog" aria-modal="true" aria-label="Order panel">
      <aside
        ref={panelRef}
        className={styles.panel}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.head}>
          <div className={styles.eyebrow}>Order · Tary Blend</div>
          <button type="button" onClick={onClose} className={styles.close}>Close</button>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <h3 className={styles.title}>One tin, lined paper, posted slowly.</h3>

        <p className={styles.body}>80g loose-leaf, 20 sachets. Shipping from Almaty.</p>

        <form
          className={styles.form}
          onSubmit={(e) => { e.preventDefault(); onClose(); }}
          style={{ display: "contents" }}
        >
          <div className={styles.field}>
            <div className={styles.label}>Email</div>
            <input
              type="email"
              required
              placeholder="aigerim@tanym.kz"
              className={styles.input}
              autoComplete="email"
            />
          </div>

          <div>
            <div className={styles.label}>A note (optional)</div>
            <textarea
              placeholder="A small note for the recipient"
              className={styles.textarea}
            />
          </div>

          <div className={styles.spacer} />

          <button type="submit" className={styles.submit}>
            Place the order — 8 400 ₸
          </button>
          <div className={styles.preview}>
            This is a design preview. No charge.
          </div>
        </form>
      </aside>
    </div>
  );
}
