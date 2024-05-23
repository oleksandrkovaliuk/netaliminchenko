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
                gatsbyImageData
              }
            }
            all_imgs {
              imgUrl {
                childImageSharp {
                  gatsbyImageData
                }
              }
              postUrl
            }
            customerReview {
              link
              customerImg {
                childImageSharp {
                  gatsbyImageData
                }
              }
              customerFeedBack
              customerName
            }
            preview_video {
              publicURL
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
