import React from "react";
import * as styles from "./thirdSection.module.scss";
import { ProjectCard } from "../../../components/projectCard";
import { Link } from "gatsby";
import { usePostSlugs } from "../../../hooks/postSlugs";
import { ProjectsType } from "../../../types/dataTypes";

export const ThirdSection = () => {
  const projects = usePostSlugs();

  return (
    <div className={styles.projects_wrap}>
      {projects.map(
        (
          item: { frontmatter: ProjectsType; fields: ProjectsType },
          i: number
        ) => (
          <ProjectCard
            key={item.frontmatter.id}
            index={i}
            slug={item.fields.slug}
            preview_img={item.frontmatter.preview_img}
            location={item.frontmatter.location}
            title={item.frontmatter.title}
            description={item.frontmatter.description}
            completedDate={item.frontmatter.complete_date}
          />
        )
      )}
      <span className={styles.all_projects}>
        <Link to="/allProjects">Explore all projects</Link>
      </span>
    </div>
  );
};
