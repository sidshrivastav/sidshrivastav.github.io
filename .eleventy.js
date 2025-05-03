const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function (eleventyConfig) {
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
      output: "docs",
    },
  };
};