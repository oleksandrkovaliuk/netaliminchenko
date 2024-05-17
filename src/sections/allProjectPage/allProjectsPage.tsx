import React, { Fragment } from "react";
import * as styles from "./allProjectsPage.module.scss";
import { ProjectsComponent } from "../../components/projects";
import { ReadyToBook } from "../../components/readytoBook";
export const AllProjectsPage = () => {
  return (
    <Fragment>
      <div className={styles.all_products_wrap}>
        <h1 className={styles.title}>Projects/Portfolio</h1>
        <ProjectsComponent cuted={false} />
      </div>
      <ReadyToBook />
    </Fragment>
  );
};
