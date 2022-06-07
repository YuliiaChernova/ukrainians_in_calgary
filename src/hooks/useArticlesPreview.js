import { graphql, useStaticQuery } from 'gatsby';

export const useArticlesPreview = () => {
  const data = useStaticQuery(graphql`
  query ArticlesPreviewQuery {
    allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Статті"}}}}}) {
      edges {
        node {
          uri
          postDescription {
            mainPostDescription
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100, width: 304, height: 176)
                }
              }
              caption
              description
            }
          }
          title
        }
      }
    }
  }
`);
  return data;
};