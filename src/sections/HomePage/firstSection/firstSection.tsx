import React, { Fragment } from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./firstSection.module.scss";
export const FirstSection = () => {
  return (
    <div className={styles.first_wrap}>
      <div className={styles.about}>
        <img
          src={
            "https://cdn4.cdn-telegram.org/file/GIVpyB9qfM2ykuH29PGl506KlP_uwQAFVqngmCTu1rdQcQNVZOZxSe-nuWFti3DvHJ4T6n2_1YtoXvWc5M_5zAjNKL1xY_zAq64OHTuCE-VH3y3a4UFuV5Be6D8Km_Q_pxeZsfrSjj5b5ul0brOujVKexxhv0obg9-2DAMMQW8212NRhNNjuq-_g2CT5MH3WtXne9sfhha6eHoPkO5BehOteQmWmE0nZEm3EBMqFelHwWsuvMw-GJNO6RUCKzFm4cMLYjQBtoqgHKpSsLDOiMkvVdzfAHyGUwbu3RmX2sbKnpD2XaLapUh-v28U1qD9zefOLuDAuurgJGjLaGwj_DQ.jpg"
          }
          alt="avat"
        />
        <div className={styles.about_summary}>
          <span>Photographer & Filmmaker</span>
          <h1>Nataliia Lypovenko</h1>
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
