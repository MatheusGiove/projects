import React from "react";
import styles from "./Image.module.css";

type ImageProps = React.ComponentProps<"img"> & {
  alt: string;
}

const Image = ({ alt, ...props }: ImageProps) => {
  return (
    <div>
      <div className={styles.skeleton}></div>
      <img className={styles.image} alt={alt} {...props} />
    </div>
  );
};

export default Image;
