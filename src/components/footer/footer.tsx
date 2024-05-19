import React from "react";
import * as styles from "./footer.module.scss";
import { Telegram } from "../../icons/telegram";
import { Instagram } from "../../icons/instagram";
import { getCategories } from "../../services/getCategory";
export const Footer = () => {
  const projects: string[] = getCategories();
  const BusinessArea: string[] = [...projects];

  return (
    <div className={styles.footer_wrap}>
      <div className={styles.logo_n_businessArea}>
        <div className={styles.logo}>
          <span>nl</span>
          <p>Photographers & videographers capturing the world around us</p>
        </div>
        <ul className={styles.business_area}>
          <li>Business Area</li>
          {BusinessArea.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.policynsocialmedia}>
        <ul className={styles.socialmedia}>
          <li>
            <a href="https://t.me/mylife_ph">
              <Telegram />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/netaliphotographer/">
              <Instagram />
            </a>
          </li>
        </ul>
        <span>
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY-NC-SA 4.0 DEED{" "}
          </a>{" "}
          2024 PRESENT © Nataliia Lypovenko
        </span>
      </div>
    </div>
  );
};
