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
            all_imgs {
              imgUrl
              postUrl
            }
            short_description
            short_disc
            full_disc
          }
        }
      }
    }
  `);

  const {
    title,
    category,
    location,
    all_imgs,
    full_disc,
    short_disc,
    short_description,
  } = nodes[0]?.frontmatter;

  return {
    title,
    category,
    location,
    all_imgs,
    full_disc,
    short_disc,
    short_description,
  };
};
