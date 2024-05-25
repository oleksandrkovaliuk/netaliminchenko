import { HeadFC, PageProps, graphql } from "gatsby";
import React from "react";
import { AboutMe } from "../sections/aboutMePage";
type PageData = {
  title: string;
  description: string;
  location: string;
};
type QueryData = {
  allMarkdownRemark: {
    nodes: Array<{ frontmatter: PageData }>;
  };
};
export const About: React.FC<PageProps<QueryData>> = ({ data }) => {
  const nodes = data.allMarkdownRemark.nodes;
  const { title, description, location } = nodes[0].frontmatter;
  return (
    <AboutMe title={title} description={description} location={location} />
  );
};
export const query = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { fields: { slug: { eq: "/about/" } } }) {
      nodes {
        frontmatter {
          title
          description
          location
        }
      }
    }
  }
`;
export default About;

export const Head: HeadFC = () => <title>About me</title>;
