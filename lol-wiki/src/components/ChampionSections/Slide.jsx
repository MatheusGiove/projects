import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ champion }) => {
  const slide = React.useRef();
  const [active, setActive] = React.useState(0);
  const [skinPosition, setSkinPosition] = React.useState([]);

  React.useEffect(() => {
    const element = Array.from(slide.current.children);
    const positions = element.map((element) => {
      const skinWidth = element.getBoundingClientRect().width;
      const margin = (window.innerWidth - skinWidth - 6) / 2;
      return element.getBoundingClientRect().left - margin;
    });
    setSkinPosition(positions);
  }, []);

  function prevSlide() {
    if (active > 0) {
      setActive(active - 1);
    }
    else {
      setActive(champion.skins.length - 1);
    }
  }

  function nextSlide() {
    if (active < champion.skins.length - 1) {
      setActive(active + 1);
    }
    else {
      setActive(0);
    }
  }

  return (
    <section className={styles.container}>
      <h1 className="title">Skins</h1>

      <ul
        ref={slide}
        className={styles.content}
        style={{ transform: `translateX(${-skinPosition[active]}px)` }}
      >
        {champion.skins.map((skin, i) => (
          <li
            key={skin.num}
            className={`${styles.item} ${active === i ? styles.active : ""}`}
            onClick={() => setActive(i)}
          >
            <abbr title={skin.name}>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`}
                alt={skin.name}
              />
            </abbr>
          </li>
        ))}
      </ul>
      <div className={styles.nav}>
        <button onClick={prevSlide} className={styles.previousButton}></button>
        <button onClick={nextSlide} className={styles.nextButton}></button>
      </div>
    </section>
  );
};

export default Slide;
