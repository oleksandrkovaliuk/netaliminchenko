import { graphql, useStaticQuery } from "gatsby";

export const useProytySuprotyv = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            category
            location
            title
            description
            full_description
          }
        }
      }
    }
  `);

  const {
    title,
    category,
    location,
    full_description,
    description,
  } = nodes[0]?.frontmatter;

  return {
    title,
    category,
    location,
    all_imgs,
    full_disc,
    full_description,
    description,
  };
};
