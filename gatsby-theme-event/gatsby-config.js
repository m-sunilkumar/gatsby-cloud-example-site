const path = require("path");

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

console.log(`Using environment config: '${activeEnv}'`);
require("dotenv").config({
  path: `.env.${activeEnv}`,
});
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
