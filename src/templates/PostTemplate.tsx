import React from "react";
import { graphql } from "gatsby";

type FrontmatterProps = {
  title: string;
  description: string;
};

type PostTemplateProps = {
  data: {
    page: { frontmatter: FrontmatterProps };
  };
};
const PostTemplate: React.FC<PostTemplateProps> = ({ data }) => {
  const { frontmatter } = data.page;

  return (
    <div>
      <h1>{frontmatter?.title}</h1>
      <p>{frontmatter?.description}</p>
    </div>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
