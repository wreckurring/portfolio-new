module.exports = {
  siteMetadata: {
    title: 'Mohit Kumar',
    description:
      'Mohit Kumar is a backend-focused software engineer studying at AIT Pune, specializing in distributed systems, real-time applications, and scalable infrastructure.',
    siteUrl: 'https://wreckurring.github.io',
    author: 'Mohit Kumar',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
