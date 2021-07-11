const path = require("path");
const fontawesomeSubset = require("fontawesome-subset");

fontawesomeSubset(
  {
    brands: ["btc"],
    solid: ["chevron-down", "chevron-right", "user"],
  },
  path.resolve(__dirname, "dist")
);
