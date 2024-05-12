import React, { Fragment } from "react";
import * as styles from "./readyToBook.module.scss";
import { Share } from "../../icons/share";
import { Telegram } from "../../icons/telegram";

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
              <img
                src="https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2Fnataliavatar.png?alt=media&token=4225e739-c2dd-4f52-83a5-8a9512424817"
                alt="int avat"
              />
              <Telegram />
              <Share />
            </a>
          </div>
        </div>
        <button className={styles.contant_form}>Fill contant form</button>
      </div>
    </div>
  );
};
