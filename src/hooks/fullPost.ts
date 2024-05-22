import { graphql, useStaticQuery } from "gatsby";
export const useExtractAllProjects = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fields: { slug: { regex: "/project/" } } }) {
        nodes {
          frontmatter {
            title
            location
            category
            description
            full_description
            preview_img {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
            all_imgs {
              imgUrl {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
              postUrl
            }
            customerReview {
              link
              customerImg {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
              customerFeedBack
              customerName
            }
          }
          fields {
            slug
          }
        }
      }
    }
  `);
  return nodes;
};
