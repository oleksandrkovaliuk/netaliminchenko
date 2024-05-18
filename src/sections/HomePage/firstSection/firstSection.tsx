import React, { useRef, useState } from "react";
import * as styles from "./firstSection.module.scss";
import { Link } from "gatsby";
import { Share } from "../../../icons/share";
export const FirstSection = () => {
  return (
    <div className={styles.first_wrap}>
      <div className={styles.about}>
        <img src="/avatar.png" alt="avat" />
        <div className={styles.about_summary}>
          <span>Photographer & Filmmaker</span>
          <abbr title="go to instagram">
            <Link
              className={styles.redirect_to_blog}
              to="https://www.instagram.com/netaliminchenko/"
            >
              <h1>Nataliia Lypovenko</h1>
              <Share />
            </Link>
          </abbr>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            velit possimus nostrum rem, adipisci reprehenderit beatae nisi
            officiis ipsa repellat, neque, vero id! Enim totam quod, itaque
            aliquam pariatur hic!
          </p>
          <Link to="/about" className={styles.about_me}>
            More about me
          </Link>
        </div>
      </div>
    </div>
  );
};
