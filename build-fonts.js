const path = require("path");
const fontawesomeSubset = require("fontawesome-subset");

fontawesomeSubset(
  {
    brands: ["btc"],
    solid: ["chevron-down", "chevron-right"],
  },
  path.resolve(__dirname, "dist")
);
