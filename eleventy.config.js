module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/_data");

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

