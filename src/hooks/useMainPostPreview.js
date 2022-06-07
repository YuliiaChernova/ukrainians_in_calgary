import { graphql, useStaticQuery } from 'gatsby';

export const useMainPostPreview = () => {
  const data = useStaticQuery(graphql`
  query MainPostPreviewQuery {
    allWpPost(filter: {databaseId: {eq: 11}}) {
      edges {
        node {
          postDescription {
            mainPostDescription
          }
          uri
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
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