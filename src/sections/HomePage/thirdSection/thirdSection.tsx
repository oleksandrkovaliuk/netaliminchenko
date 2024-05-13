import React from "react";
import * as styles from "./thirdSection.module.scss";
import { ProjectCard } from "../../../components/projectCard";
import { Link } from "gatsby";
import { useExtractAllProjects } from "../../../hooks/posts";
import { usePostSlugs } from '../../../hooks/postSlugs';
type ProjectsType = {
  id: number;
  title: string;
  location: string;
  description: string;
  prevew_img: string;
  slug: string;
};
export const ThirdSection = () => {
  const projects = usePostSlugs();
  return (
    <div className={styles.projects_wrap}>
      {projects.map((item: ProjectsType) => (
        <ProjectCard
          key={item.id}
          id={item.id}
          slug={item.slug}
          img={item.prevew_img}
          location={item.location}
          title={item.title}
          shortDisc={item.description}
        />
      ))}
      <span className={styles.all_projects}>
        <Link to="/projects">Explore all projects</Link>
      </span>
    </div>
  );
};
