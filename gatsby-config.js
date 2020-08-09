require(`dotenv`).config({
    path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
    pathPrefix: `/blog`,
    siteMetadata: {
        siteTitle: "TkDodo's blog",
        siteTitleAlt: `TkDodo's blog`,
    },
    plugins: [
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            // See the theme's README for all available options
            options: {
                navigation: [
                    {
                        title: `Blog`,
                        slug: `/`,
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
                    {
                        name: `Home`,
                        url: `https://www.dorfmeister.cc`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-autolink-headers`],
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
        `gatsby-plugin-netlify`,
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
