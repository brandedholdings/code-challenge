module.exports = {
    siteMetadata: {
        title: `BrandedHoldings Code Challenge`,
        description: `A simple code challenge.`,
        author: `David Maple<dave.maple@brandedholdings.com>`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
};
