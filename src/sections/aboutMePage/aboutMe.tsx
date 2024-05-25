import React, { useEffect, useRef } from "react";
import * as styles from "./aboutme.module.scss";
import { Telegram } from "../../icons/telegram";
import { Instagram } from "../../icons/instagram";
import { ReadyToBook } from "../../components/readytoBook";
import { useInView } from "framer-motion";
type PageComponentProps = {
  title: string;
  description: string;
  location: string;
};
export const AboutMe: React.FC<PageComponentProps> = ({
  title,
  description,
  location,
}) => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  const h1InView = useInView(h1Ref, {
    amount: "some",
    // once: true,
  });

  const pInView = useInView(pRef, {
    amount: "some",
  });

  return (
    <div className={styles.about_wrap}>
      <div className={styles.about_content}>
        <div className={styles.img_block}>
          <img src="/about_me.png" alt="left_photo" />
          <ul className={styles.socialmedia_location}>
            <li>Edmonton , AB , CA</li>
            <li>
              <a href="https://t.me/mylife_ph">
                <abbr title="telegram">
                  <Telegram />
                </abbr>
              </a>
              <a href="https://www.instagram.com/netaliphotographer/">
                <abbr title="instagram">
                  <Instagram />
                </abbr>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.text_content}>
          <h1
            ref={h1Ref}
            style={
              h1InView
                ? { opacity: "1", transform: "translateY(0px)" }
                : { opacity: "0", transform: "translateY(20px)" }
            }
          >
            {title}
          </h1>
          <p ref={pRef} style={pInView ? { opacity: "1" } : { opacity: "0" }}>
            {description}
          </p>
        </div>
      </div>

      <ReadyToBook />
    </div>
  );
};
