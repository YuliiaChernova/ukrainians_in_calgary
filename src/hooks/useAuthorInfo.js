import { graphql, useStaticQuery } from 'gatsby';

export const useAuthorInfo = () => {
  const data = useStaticQuery(graphql`
  query AuthorInfoQuery {
    allWpPage(filter: {databaseId: {eq: 122}}) {
      edges {
        node {
          id
          articleAuthorACF {
            authorname
            facebook
            linkedin
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 56, height: 56)
                }
              }
            }
          }
        }
      }
    }
  }
`);
  return data;
};