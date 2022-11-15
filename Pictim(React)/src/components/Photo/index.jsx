import React from "react";
import styles from "./Photo.module.scss";

export const Photo = ({photo}) => {
  return (
    <div className={styles.photo}>
      <img src={photo}></img>
    </div> 
  );
}

