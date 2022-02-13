require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  pathPrefix: `/blog`,
  trailingSlash: 'never',
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
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: 'var(--theme-ui-colors-primary);',
        paths: ['/blog/*-*'],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
              icon: `<svg aria-hidden="true" focusable="false" height="16" viewBox="0 0 16 16" width="16"><path fill="currentcolor" fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              elements: [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`],
              offsetY: `60`,
            },
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
            options: {
              isIconAfterHeader: true,
              icon: `<svg aria-hidden="true" focusable="false" height="16" viewBox="0 0 16 16" width="16"><path fill="currentcolor" fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              elements: [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`],
              offsetY: `60`,
            },
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
