module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "ysylr7486iuq",
        accessToken: "3yrNfvx6o2RSoJMS-fGoksRqP0p3Jk42kYA0koxFnLg",
      },
    },
    { resolve: "gatsby-theme-event" },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
