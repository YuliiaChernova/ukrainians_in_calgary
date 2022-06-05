module.exports = {
  siteMetadata: {
    title: `ukrainians_in_calgary`,
    description: `Website with useful information for ukrainian newcomers in Calgary.`,
    author: `@YuliiaChernova`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://ukrainiansincalgary.local/graphql`
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Noto Serif\:400`, `Noto Serif\:700`],
        display: `swap`
      }
    }
  ],
}