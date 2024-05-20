import React, { useEffect, useRef } from "react";
import * as styles from "./aboutme.module.scss";
import { Telegram } from "../../icons/telegram";
import { Instagram } from "../../icons/instagram";
import { ReadyToBook } from "../../components/readytoBook";
import { useInView } from "framer-motion";

export const AboutMe = () => {
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
            Lets dive into my life
          </h1>
          <p ref={pRef} style={pInView ? { opacity: "1" } : { opacity: "0" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            ratione facere repellendus consequuntur, placeat neque odio. Quia
            minus omnis accusantium voluptatibus quod nobis, incidunt eveniet,
            eligendi numquam, ad quasi alias. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Doloribus accusantium in reprehenderit
            error fugit? Commodi praesentium, inventore porro optio autem
            temporibus dolores. Nobis asperiores dolorum laudantium officiis
            cumque, quod reprehenderit? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nesciunt cum nobis delectus reiciendis commodi
            corporis eaque, unde pariatur laudantium ut dolorum possimus et quae
            dolor? Expedita excepturi numquam odio distinctio. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Deleniti, quia ipsam delectus
            beatae soluta consequuntur quis dicta modi tempora, minus alias!
            Voluptates non at, repudiandae libero atque porro amet modi.
          </p>
        </div>
      </div>

      <ReadyToBook />
    </div>
  );
};
