const adapter = require('gatsby-adapter-netlify').default;

module.exports = {
  siteMetadata: {
    title: 'Mohit Kumar',
    description:
      'Software engineer focused on high-throughput backends, distributed systems, and resilient full-stack products.',
    siteUrl: 'https://wreckurring.github.io',
    author: 'Mohit Kumar',
  },
  adapter: adapter(),
  plugins: ['gatsby-plugin-styled-components'],
};
