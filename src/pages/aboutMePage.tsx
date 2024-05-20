import { HeadFC, PageProps } from "gatsby";
import React from "react";
import { AboutMe } from "../sections/aboutMePage";

export const AboutMePage: React.FC<PageProps> = () => {
  return <AboutMe />;
};
export default AboutMePage;

export const Head: HeadFC = () => <title>About me</title>;
