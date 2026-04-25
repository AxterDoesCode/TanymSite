import useReveal from "../hooks/useReveal.js";
import styles from "./Vessel.module.css";

const SPECS = [
  ["Format",  "80 g loose · 20 sachets"],
  ["Roast",   "Light"],
  ["Origin",  "Almaty oblast"],
  ["Vessel",  "Kese, recommended"],
  ["Edition", "No. 001"],
];

export default function Vessel() {
  const ref = useReveal();
  return (
    <section id="blend" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div>
          <p className={styles.eyebrow}>The vessel</p>
          <h2 className={styles.title}>Held in the kese.</h2>

          <p className={styles.body}>
            The <em>kese</em> is the wide, low Kazakh tea bowl. Held in two hands, never by a handle.
            Filled half-full so it can be passed without spilling, and refilled often so the conversation
            never has to pause.
          </p>

          <blockquote className={styles.pull}>
            Pour for the room before you pour for yourself.
          </blockquote>

          <p className={styles.body}>
            Tary is added a small spoonful at a time, after the milk. The roasted millet floats, then settles —
            a quiet signal that the cup is ready. Drink slowly. There is more in the pot.
          </p>
        </div>

        <aside className={styles.aside}>
          <p className={styles.asideLabel}>Specimen</p>
          <p className={styles.asideBody}>
            One tin, lined paper, posted slowly from Almaty.
          </p>
          <ul className={styles.specs}>
            {SPECS.map(([k, v]) => (
              <li key={k}><span>{k}</span><b>{v}</b></li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
