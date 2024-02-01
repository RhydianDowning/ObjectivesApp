const fs = require('fs');
const path = require('path');

module.exports = function loadCssFromDir(pathToDir) {
  const stylesheets = {};
  const files = fs.readdirSync(pathToDir);

  files.forEach((file) => {
    const fileName = path.parse(file).name;
    const fileExt = path.parse(file).ext;
    let relativePath = pathToDir.length > 3 ? '../..' + pathToDir.substr(3) : pathToDir;
    if (fileExt === ".css") {
      stylesheets[fileName] = {
        path: `${relativePath}/${file}`,
      };
    };
  });
  return stylesheets;
};


//console.log(loadCssFromDir(
//  'src/assets/CSS/purpleModern'
//));
