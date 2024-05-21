import React, { Fragment } from "react";
import * as styles from "./fourthSection.module.scss";
import { ProjectsComponent } from "../../../components/projects";
import { Link } from "gatsby";

export const FourthSection = () => {
  return (
    <Fragment>
      <ProjectsComponent cuted={true} />
      <span className={styles.all_projects}>
        <Link to="/allProjects">Browse all works</Link>
      </span>
    </Fragment>
  );
};
