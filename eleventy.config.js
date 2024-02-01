module.exports = function(eleventyConfig) {
  // Copy static assets to output directory
  eleventyConfig.addPassthroughCopy("src/assets");

  // Set input and output directories
  return {
    dir: {
      input: "src",
      includes: "./_includes",
      output: "dist",
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
  };
};
