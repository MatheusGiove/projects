import React from "react";
import { GlobalContext } from "../../context/GlobalContext";
import styles from "./Hability.module.css";

const Hability = ({ champion }) => {
  const { currentVersion } = React.useContext(GlobalContext);
  const [spells, setSpells] = React.useState([]);
  const [passive, setPassive] = React.useState([]);

  React.useEffect(() => {
    const spell = champion.spells.map((spell) => {
      return spell;
    });
    setSpells(spell);
    const passive = {
      description: champion.passive.description,
      image: champion.passive.image.full,
      name: champion.passive.name,
    };
    setPassive(passive);
  }, [champion]);

  const keyBinds = ["Q", "W", "E", "R"];
  
  return (
    <section>
      <h1 className="title">Habilidades</h1>
      <ul className={styles.grid}>
        {spells && passive && (
          <li className={styles.list}>
            <h2 className={styles.title}>{passive.name}</h2>
            <span className={styles.keyBind}>P</span>
            <img
              className={styles.image}
              src={`http://ddragon.leagueoflegends.com/cdn/${currentVersion}/img/passive/${passive.image}`}
              alt={passive.name}
            />
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: passive.description }}
            />
          </li>
        )}
        {spells &&
          passive &&
          spells.map((spell, index) => (
            <li className={styles.list} key={spell.id}>
              <h2 className={styles.title}>{spell.name}</h2>
              <span className={styles.keyBind}>
                {keyBinds[index] ? keyBinds[index] : ""}
              </span>
              <img
                className={styles.image}
                src={`http://ddragon.leagueoflegends.com/cdn/${currentVersion}/img/spell/${spell.image.full}`}
                alt={spell.name}
              />
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: spell.description }}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Hability;
