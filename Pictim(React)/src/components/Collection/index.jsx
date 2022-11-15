import React from "react";
import styles from "./Collection.module.scss";
import { useNavigate } from "react-router-dom";


export const Collection = ({name, cover, id}) => {
      const navigate = useNavigate();
      return (
            <div onClick={() => navigate(`${id}`)} className={styles.collection}>
                  <img src={cover}></img>
                  <h1>{name}</h1>
            </div> 
            
      );  
}
