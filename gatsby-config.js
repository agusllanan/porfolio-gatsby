/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('tailwindcss')]
      }
  }
],
  plugins: [`gatsby-plugin-fontawesome-css`],
  siteMetadata: {
    title: 'Dev Agustín Llanán',
    description: 'This is the site of Agustín Llanán, Full Stack Developer',
    copyright:'This website is Copyright (c) Agustín Llanán'
  }
}


