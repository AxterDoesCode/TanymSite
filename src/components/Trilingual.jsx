import styles from "./Trilingual.module.css";

const COLUMNS = [
  { label: "EN", body: "Black tea with tary, the roasted millet of the steppe. Rooted in the nomadic heritage of Kazakhstan. Traditionally shared, never rushed." },
  { label: "KZ", body: "Қара шай мен қуырылған тары — даланың дәні. Қазақтың көшпенді мұрасынан тамыр алған. Дәстүр бойынша бөлісіп ішіледі, асықпай." },
  { label: "RU", body: "Чёрный чай с тары — обжаренным просом степи. Укоренён в кочевом наследии Казахстана. Делятся им неспешно, как ритуалом." },
];

export default function Trilingual() {
  return (
    <section id="origin" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>Origin · in three languages</div>
        <div className={styles.rule} aria-hidden="true" />
        <div className={styles.columns}>
          {COLUMNS.map((c) => (
            <div key={c.label}>
              <div className={styles.lang}>{c.label}</div>
              <p className={styles.body}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
