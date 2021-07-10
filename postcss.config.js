const postcssImport = require("postcss-import");
const precss = require("precss");
const autoprefixer = require("autoprefixer");
const postcssCustomMedia = require("postcss-custom-media");

module.exports = {
  parser: "sugarss",
  map: false,
  plugins: [postcssImport(), precss(), postcssCustomMedia(), autoprefixer()],
};
