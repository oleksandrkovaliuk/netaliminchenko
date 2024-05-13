import React from "react";
import * as styles from "./thirdSection.module.scss";
import { ProjectCard } from "../../../components/projectCard";
import { Link } from "gatsby";
import { useExtractAllProjects } from "../../../hooks/posts";
type ProjectsType = {
  id: number;
  title: string;
  location: string;
  category: string;
  description: string;
  prevew_img: string;
};
export const ThirdSection = () => {
  const projects = useExtractAllProjects();
  console.log(projects, "check");
  return (
    <div className={styles.projects_wrap}>
      {projects.map((item: ProjectsType) => (
        <ProjectCard
          key={item.id}
          id={item.id}
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
