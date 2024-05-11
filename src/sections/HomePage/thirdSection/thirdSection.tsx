import React from "react";
import * as styles from "./thirdSection.module.scss";
import { ProjectCard } from "../../../components/projectCard";
import { Data } from "../../../../static/hardcode/data";
import { Link } from "gatsby";
import { RightTo } from "../../../icons/rightTo";
import { Share } from "../../../icons/share";
export const ThirdSection = () => {
  return (
    <div className={styles.projects_wrap}>
      {Data.slice(0, 4).map((item) => (
        <ProjectCard
          key={item.id}
          id={item.id}
          img={item.prevew_img}
          location={item.location}
          title={item.title}
          shortDisc={item.short_disc}
        />
      ))}
      <span className={styles.all_projects}>
        Liked my works then <RightTo />
        <Link to="/projects">Explore all projects</Link>
      </span>
    </div>
  );
};
