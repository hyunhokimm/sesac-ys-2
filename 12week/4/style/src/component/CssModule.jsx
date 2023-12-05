import React from "react";
import styles from "../styles/origin.module.css";

const CssModule = () => {
  return (
    <div className={styles.origin}>
      <div className={`${styles.box} ${styles.red}`}></div>
      <div className="orange box"></div>
      <div className="yellow box"></div>
      <div className="green box"></div>
      <div className="blue box"></div>
      <div className="purple box"></div>
    </div>
  );
};

export default CssModule;
