module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
  
    return {
      dir: {
        input: ".",
        includes: "_includes",
        output: "_site"
      }
    };
  };