/* global exports */

exports.createPages = async ({ actions, graphql }) => {
  
  const { createPage } = actions;
  const result = await graphql(`
    {
      items: allWpPost {
        edges {
          node {
            uri
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
            title
            content
          }
        }
      }
    }
  `);

  const contentItems = result.data.items.edges;

  contentItems.forEach(({ node }) => {
    createPage({
      path: node.uri,
      component: require.resolve('./src/templates/Publication.js'),
      context: {
        uri: node.uri
      }
    });
  });
};