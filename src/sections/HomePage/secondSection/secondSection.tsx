import React from "react";
import * as styles from "./secondSection.module.scss";
export const SecondSection = () => {
  return (
    <div className={styles.second_wrap}>
      <div className={styles.container}>
        <div
          style={{
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/eb93/3e83/1a2f210e2c93f82bdc1e49f38386faa3?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lhjUM4ZDDP921NOVTA0BNkGLxe6i6~fSNDHIrIyebiYQd~jm9xUElPEawGWUpufNb-JbeG636tLfhDm1xl2jZ3C6gHBE8yZim-X6~x7y4Y5a5Weh0nMyy2khkN-JHGpM1~WMyznqT6uogworotU2NluBWvklaRVNbQUHpQaCwDuhFjteORyIZRfxIbSqHGMuYA-kiZw0j8e0Msk5rUfdTbwkVErAWl1UZmB4B8MgS8Ewi84jCT4NbEgABcd3h-n1phT6B~NQbGK9LobDZsdWrvBry2ikuAHSab3FdlASQWkZkDmLIRxrgta~g9qv3XM5-SAhMQXiP7A~nFY6Jl4Zwg__)",
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
