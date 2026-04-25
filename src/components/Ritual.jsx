import styles from "./Ritual.module.css";

const STEPS = [
  { n: "i.",   title: "Heat", body: "Bring water just off the boil — 95°C — into a teapot." },
  { n: "ii.",  title: "Rest", body: "Place one bag. Let the infusion rest, three to five minutes." },
  { n: "iii.", title: "Pour", body: "Serve with hot milk, approximately 100 ml. Plant-based alternatives are welcome." },
];

export default function Ritual() {
  return (
    <section id="ritual" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>Brewing ritual</div>
        <h2 className={styles.title}>Held, not hurried.</h2>

        <div className={styles.rule} aria-hidden="true" />
        <div className={styles.steps}>
          {STEPS.map((s) => (
            <article key={s.n} className={styles.step}>
              <div className={styles.numeral}>{s.n}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.body}>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
