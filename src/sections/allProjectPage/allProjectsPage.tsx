import React from "react";
import * as styles from "./allProjectsPage.module.scss";
import { ProjectsComponent } from "../../components/projects";
export const AllProjectsPage = () => {
  return (
    <div className={styles.all_products_wrap}>
      <h1 className={styles.title}>Projects/Portfolio</h1>
      <ProjectsComponent cuted={false} />
    </div>
  );
};
