import React from "react";
import * as styles from "./firstSection.module.scss";
import { Link } from "gatsby";
import { Share } from "../../../icons/share";
export const FirstSection = () => {
  return (
    <div className={styles.first_wrap}>
      <div className={styles.about}>
        <div className={styles.about_content}>
          <div className={styles.img}>
            <Link to="/about">
              <img src="/main_photo.png" alt="avat" />
            </Link>
          </div>

          <span>Photographer & Filmmaker</span>
          <abbr title="go to instagram">
            <Link
              className={styles.redirect_to_blog}
              to="https://www.instagram.com/netaliminchenko/"
            >
              <Share />
              <h1>Nataliia Lypovenko</h1>
            </Link>
          </abbr>
        </div>
        <Link to="/about" className={styles.about_me}>
          More about me
        </Link>
      </div>
    </div>
  );
};
