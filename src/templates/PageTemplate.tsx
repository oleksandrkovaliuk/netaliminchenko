// import React from "react";
// import { graphql } from "gatsby";

// type FrontmatterProps = {
//   title: string;
//   description: string;
// };

// type PageTemplateProps = {
//   data: {
//     page: { frontmatter: FrontmatterProps };
//   };
// };
// const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => {
//   const { frontmatter } = data.page;

//   return (
//     <div>
//       <h1>{frontmatter?.title}</h1>
//       <p>{frontmatter?.description}</p>
//     </div>
//   );
// };

// export default PageTemplate;

// export const pageQuery = graphql`
//   query PageByPath($slug: String!) {
//     page: markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       frontmatter {
//         title
//         description
//       }
//     }
//   }
// `;
