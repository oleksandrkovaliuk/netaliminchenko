import React, { Fragment } from "react";
import * as styles from "./readyToBook.module.scss";
import { Share } from "../../icons/share";
import { Telegram } from "../../icons/telegram";
import { Link } from "gatsby";

export const ReadyToBook = () => {
  return (
    <div className={styles.ready_to_book}>
      <h1 className={styles.title}>Ready to book ? Lets chat</h1>
      <div className={styles.way_to_contact}>
        <div className={styles.social_media}>
          <div className={styles.telegram}>
            <a
              href="https://www.instagram.com/netaliphotographer/"
              className={styles.img_link}
            >
              <abbr title="with telegram">
                <img src="/avatar.png" alt="int avat" />
                <Telegram />
                <Share />
              </abbr>
            </a>
          </div>
        </div>
        <Link to="/contact">
          <button className={styles.contant_form}>Fill contant form</button>
        </Link>
      </div>
    </div>
  );
};
