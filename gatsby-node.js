const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const postTemplate = path.resolve("./src/templates/PostTemplate.tsx");
const pageTemplate = path.resolve("./src/templates/PageTemplate.tsx");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;

    createNodeField({
      node,
      name: "slug",
      value: source === "posts" ? `/post${slug}` : slug,
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
                    description
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

        // Create posts
        const posts = items.filter(
          (item) => item.node.fields.source === "posts"
        );
        posts.forEach(({ node }) => {
          const slug = node.fields.slug;
          const source = node.fields.source;

          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              source,
            },
          });
        });

        // and pages.
        const pages = items.filter(
          (item) => item.node.fields.source === "pages"
        );
        pages.forEach(({ node }) => {
          const slug = node.fields.slug;
          const source = node.fields.source;

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug,
              source,
            },
          });
        });
      })
    );
  });
};
