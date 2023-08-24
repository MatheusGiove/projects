import React from "react";
import styles from "./Lore.module.css";

export const Lore = ({ champion }) => {
  return (
    <section className={styles.group}>
      <h1 className="title">Lore</h1>
      <p className={styles.lore}>{champion.lore}</p>
    </section>
  );
};

export default Lore;
