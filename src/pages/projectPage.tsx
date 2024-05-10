import { HeadFC, PageProps } from "gatsby";
import React from "react";
import { ProjectPageElem } from "../sections/projectPage";

const ProjectPage: React.FC<PageProps> = () => {
  return <ProjectPageElem />;
};
export default ProjectPage;
export const Head: HeadFC = () => <title>Project page</title>;
