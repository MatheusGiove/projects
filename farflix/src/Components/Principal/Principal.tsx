import styles from "./Principal.module.css";

const Principal = ({ language }: { language: string }) => {
  return (
    <section style={{ backgroundImage: "" }}>
      <div className={styles.principal}>Opa</div>
    </section>
  );
};

export default Principal;
