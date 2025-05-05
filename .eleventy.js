const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const fs = require("fs");
const parse = require("csv-parse/sync").parse;

module.exports = function (eleventyConfig) {
  // Add markdown-it with attributes
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  const markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  // Add passthrough copy for CSS
  eleventyConfig.addPassthroughCopy("style.css");

  // Add collection for articles
  eleventyConfig.addCollection("articles", function (collectionApi) {
    return collectionApi.getFilteredByTag("article").reverse();
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "docs",
    },
  };
};