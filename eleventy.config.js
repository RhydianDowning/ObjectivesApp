module.exports = function(eleventyConfig) {
  // Copy static assets to output directory
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addDataExtension("json", (contents) => {
  return JSON.parse(contents);
  });

  //Add Page for each Objective
  eleventyConfig.addCollection("objectives", function (collection) {
    return collection.getFilteredByGlob("src/objectives/*.njk");
  });

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

