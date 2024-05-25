const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const projectTemplate = path.resolve("./src/templates/ProjectTemplate.tsx");
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    createNodeField({
      node,
      name: "slug",
      value: source === "projects" ? `/project${slug}` : slug,
    });

    createNodeField({
      node,
      name: "source",
      value: source,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: { fields: { slug: { ne: null } } }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                    source
                  }
                  frontmatter {
                    title
                    location
                    category
                    description
                    full_description
                    complete_date
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
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        // Create projects
        const projects = items.filter(
          (item) => item.node.fields.source === "projects"
        );
        projects.forEach(({ node }) => {
          const slug = node.fields.slug;
          const source = node.fields.source;

          createPage({
            path: slug,
            component: projectTemplate,
            context: {
              slug,
              source,
            },
          });
        });

        // and pages.
        // const pages = items.filter(
        //   (item) => item.node.fields.source === "pages"
        // );
        // pages.forEach(({ node }) => {
        //   const slug = node.fields.slug;
        //   const source = node.fields.source;
        //   console.log(slug, "check pages slugs");
        //   createPage({
        //     path: slug,
        //     context: {
        //       slug,
        //       source,
        //     },
        //   });
        // });
      })
    );
  });
};
