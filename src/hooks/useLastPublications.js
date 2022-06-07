import { graphql, useStaticQuery } from 'gatsby';

export const useLastPublications = () => {
  const data = useStaticQuery(graphql`
  query LastPublicationsQuery {
    allWpPost(limit: 6, filter: {databaseId: {ne: 73, nin: 11}}) {
      edges {
        node {
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100, width: 304, height: 176)
                }
              }
            }
          }
          title
          uri
        }
      }
    }
  }
`);
  return data;
};