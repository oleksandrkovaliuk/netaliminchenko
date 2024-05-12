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
            short_description
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
    short_description,
  } = nodes[0]?.frontmatter;

  return {
    title,
    category,
    location,
    all_imgs,
    full_disc,
    full_description,
    short_description,
  };
};
