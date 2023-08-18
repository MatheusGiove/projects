import React from "react";
import styles from "./Title.module.css";

const Title = ({ champion, onImageLoad }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  function handleImageLoaded() {
    setImageLoaded(true);
    onImageLoad();
  }

  return (
    <section className={styles.intro}>
      <div className={styles.containerImage}>
        <img
          className={styles.image}
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
          alt={champion.id}
          onLoad={handleImageLoaded}
        />
      </div>
      <span className={styles.featureVertical}></span>
      <span className={styles.featureHorizontal}></span>
      <div className={styles.group}>
        <p className={styles.title}>{champion.title}</p>
        <h1 className={styles.name}>{champion.name}</h1>
      </div>
    </section>
  );
};

export default Title;
