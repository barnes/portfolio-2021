module.exports = {
  siteMetadata: {
    title: "Portfolio 2021",
    siteUrl: "www.google.com",
    description: "Ryan Barnes Portfolio"
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "uz0kbzwn",
        dataset: "production",
        watchMode: true,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
