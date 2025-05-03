const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("articles", function (collectionApi) {
    return collectionApi.getFilteredByTag("article").reverse();
  });

  // Passthrough copy for your CSS
  eleventyConfig.addPassthroughCopy("style.css");

  // Configure markdown-it with the attrs plugin
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };

  const markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "docs",
    },
  };
};