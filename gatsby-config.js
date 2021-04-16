module.exports = {
  // no fields are required, they're all optional
  // 👇 now gatsby automatically knows how to use emotion ✨
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet', // this is so we can do SSR with react helmet
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
  ],
  siteMetadata: {
    title: 'FEM gatsby site',
    description: 'A site built followinng the gatsby FEM workshop',
  },
};
