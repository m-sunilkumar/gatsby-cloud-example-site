const path = require("path");
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: path.join(__dirname, "src/pages"),
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "ysylr7486iuq",
        accessToken: "3yrNfvx6o2RSoJMS-fGoksRqP0p3Jk42kYA0koxFnLg",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
