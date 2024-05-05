import React, { Fragment } from "react";
import * as styles from "./firstSection.module.scss";
export const FirstSection = () => {
  return (
    <div style={{ height: "10000px" }} className={styles.wrap}>
      <span className={styles.hello}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quos,
        sed porro omnis, voluptas atque soluta cumque voluptatem quisquam
        placeat accusamus adipisci laborum ab beatae deserunt dolor a odit
        eligendi.
      </span>
      <span className={styles.hello}>
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quos,
        sed porro omnis, voluptas atque soluta cumque voluptatem quisquam
        placeat accusamus adipisci laborum ab beatae deserunt dolor a odit
        eligendi.
      </span>
    </div>
  );
};
