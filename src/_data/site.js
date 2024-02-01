//Global variabls containing site data
const loadCssFromDir = require("../_utils/autoStyle.js");


//blueClassic and purpleModern themes
const cssTheme = 'purpleModern';
const title = "My Game Stat App";
const game = "TFT";
const description = `A simple app to show your ${game} Stats`;
const author = "Rhydian Downing";
const stylesheet = loadCssFromDir(`src/assets/CSS/${cssTheme}`);

console.log(stylesheet);

module.exports = {
  title,
  game,
  description,
  author,
  stylesheet,
};
