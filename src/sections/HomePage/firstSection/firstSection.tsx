import React from "react";
import * as styles from "./firstSection.module.scss";
import { Link } from "gatsby";
import { Share } from "../../../icons/share";
export const FirstSection = () => {
  return (
    <div className={styles.first_wrap}>
      <div className={styles.about}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2Fnataliavatar.png?alt=media&token=4225e739-c2dd-4f52-83a5-8a9512424817"
          alt="avat"
        />
        <div className={styles.about_summary}>
          <span>Photographer & Filmmaker</span>

          <Link
            className={styles.redirect_to_blog}
            to="https://www.instagram.com/netaliminchenko/"
          >
            <h1>Nataliia Lypovenko</h1>
            <Share />
          </Link>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            velit possimus nostrum rem, adipisci reprehenderit beatae nisi
            officiis ipsa repellat, neque, vero id! Enim totam quod, itaque
            aliquam pariatur hic!
          </p>
        </div>
      </div>
    </div>
  );
};
