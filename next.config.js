const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
/* module.exports = withSass({
  sassLoaderOptions: {
    sourceMap: true
  }
}); */

module.exports = withPlugins([
  [
    withSass,
    {
      sassLoaderOptions: {
        sourceMap: true
      }
    }
  ],
  {
    target: "serverless"
  }
]);
