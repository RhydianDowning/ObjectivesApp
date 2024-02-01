module.exports = function(eleventyConfig) {
  // Copy static assets to output directory
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/_data");
//  eleventyConfig.addDataExtension("json", (contents) => {
//    return JSON.parse(contents);
//  });


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

