module.exports = {
  siteMetadata: {
    title: `Manawire`,
    description: `Professional Website Design and SEO Services - Manawire`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1024,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      /* Include plugin */
      resolve: 'gatsby-omni-font-loader',

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: 'async',

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ['https://fonts.gstatic.com'],

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        // custom: [
        //   {
        //     /* Exact name of the font as defied in @font-face CSS rule */
        //     name: ["Font Awesome 5 Brands", "Font Awesome 5 Free"],
        //     /* Path to the font CSS file inside the "static" folder with @font-face definition */
        //     file: "/fonts/fontAwesome/css/all.min.css",
        //   },
        // ],

        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: 'Nunito Sans',
            /* URL to the font CSS file with @font-face definition */
            file: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,600;0,700;1,400',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: '#3bae52',
        // Configure paths where the scroll indicator will appear
        // paths: ['/', '/blog/**'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-77074703-1`,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: [`/preview/**`, `/do-not-track/me/too/`],
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: `YOUR_GOOGLE_OPTIMIZE_TRACKING_ID`,
        // Enables Google Optimize Experiment ID
        // experimentId: `YOUR_GOOGLE_EXPERIMENT_ID`,
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: `YOUR_GOOGLE_OPTIMIZE_VARIATION_ID`,
        // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: `example.com`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: '192058494550985',
    //   },
    // },
  ],
}
