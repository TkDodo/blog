require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    author: 'TkDodo',
    siteTitle: "TkDodo's blog",
    siteTitleAlt: `TkDodo's blog`,
    siteHeadline: `TkDodo's blog`,
    siteUrl: `https://tkdodo.eu/blog`,
    siteDescription: `A technical blog about frontend-development, TypeScript and React`,
    siteLanguage: `en`,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
          },
          {
            resolve: '@weknow/gatsby-remark-twitter',
            options: {
              theme: 'dark',
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noreferrer noopener',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
          },
          {
            resolve: '@weknow/gatsby-remark-twitter',
            options: {
              theme: 'dark',
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noreferrer noopener',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              backgroundColor: 'transparent',
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              backgroundColor: 'transparent',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        mdx: false,
        blogPath: '/all',
        navigation: [
          {
            title: `Blog`,
            slug: `/all`,
          },
          {
            title: `Tags`,
            slug: `/tags`,
          },
          {
            title: `Sponsors`,
            slug: `/sponsors`,
          },
          {
            title: `Rss`,
            slug: `/rss.xml`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/tkdodo`,
          },
          {
            name: `Github`,

            url: `https://github.com/tkdodo`,
          },
        ],
        feed: false,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TkDodo's blog`,
        short_name: `tkdodo-blog`,
        description: `A technical blog about frontend-development, Typescript and React`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#a10f15`,
        display: `standalone`,
        icons: [
          {
            src: `/stack.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `@devular/gatsby-plugin-plausible`,
      options: {
        domain: `tkdodo.eu`,
        proxyScript: `/js/script.js`,
        proxyApi: `/api/event`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://tkdodo.eu/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
                {
                    site {
                        siteMetadata {
                            title: siteTitle
                            description: siteDescription
                            siteUrl
                            site_url: siteUrl
                        }
                    }
                }
                `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) => {
              return allPost.nodes.map((post) => {
                return {
                  title: post.title,
                  date: post.date,
                  description: post.description,
                  url: site.siteMetadata.siteUrl + post.slug,
                  guid: site.siteMetadata.siteUrl + post.slug,
                }
              })
            },
            query: `
                        {
                            allPost(sort: { fields: date, order: DESC }) {
                                nodes {
                                    title
                                    date(formatString: "MMMM D, YYYY")
                                    description
                                    slug
                                }
                            }
                        }
                        `,
            output: `rss.xml`,
            title: `TkDodo's blog`,
          },
        ],
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
