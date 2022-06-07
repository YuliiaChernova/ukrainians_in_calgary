import { graphql, useStaticQuery } from 'gatsby';

export const useNewsPreview = () => {
  const data = useStaticQuery(graphql`
  query NewsPreviewQuery {
    allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Новини"}}}}}) {
      edges {
        node {
          uri
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