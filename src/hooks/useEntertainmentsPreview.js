import { graphql, useStaticQuery } from 'gatsby';

export const useEntertainmentsPreview = () => {
  const data = useStaticQuery(graphql`
  query EntertainmentsPreviewQuery {
    allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Розваги"}}}}}) {
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