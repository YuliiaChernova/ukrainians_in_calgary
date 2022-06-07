import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Article from '../components/Article/Article';

const Publication = ({ data }) => {
  const publication = data.allWpPost.edges[0].node;
  return (
    <Layout>
      <Article publication={publication}/>
    </Layout>
  )
};

export const pageQuery = graphql`
  query PublicationQuery($uri: String!) {
    allWpPost(filter: {uri: {eq: $uri}})  {
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
                  gatsbyImageData(quality: 100)
                }
              }
              caption
              description
            }
          }
          articleDetailsAFC {
            publicationdate
            readingtime
          }
          title
          content
        }
      }
    }
  }
`;

export default Publication;