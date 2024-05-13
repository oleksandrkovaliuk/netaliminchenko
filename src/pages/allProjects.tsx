import { HeadFC, PageProps } from "gatsby";
import React from "react";
import { AllProjectsPage } from "../sections/allProjectPage";

const AllProjects: React.FC<PageProps> = () => {
  return <AllProjectsPage />;
};
export default AllProjects;

export const Head: HeadFC = () => <title>Projects</title>;
