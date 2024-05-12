import React from "react";
import * as styles from "./secondSection.module.scss";
export const SecondSection = () => {
  return (
    <div className={styles.second_wrap}>
      <div className={styles.container}>
        <div
          style={{
            backgroundImage: "url(/secondImg.jpeg)",
          }}
          className={styles.img}
        ></div>
        <div className={styles.project_text}>
          <span>My recent projects</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dicta
            explicabo error earum ipsam amet maxime magni, aliquid accusantium
            ullam. Voluptate repudiandae architecto suscipit dolores ex unde
            perferendis debitis tempora!
          </p>
        </div>
      </div>
    </div>
  );
};
