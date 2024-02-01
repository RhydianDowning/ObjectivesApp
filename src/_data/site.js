//Global variabls containing site data
const loadCssFromDir = require("../_utils/autoStyle.js");


//blueClassic and purpleModern themes
const cssTheme = 'purpleModern';
const title = "Rhydian's Objectives";
const description = `An 11ty/Nunjucks WebApp to track my TUI Work Objectives`;
const author = "Rhydian Downing";
const stylesheet = loadCssFromDir(`src/assets/CSS/${cssTheme}`);

console.log(stylesheet);

module.exports = {
  title,
  description,
  author,
  stylesheet,
};
