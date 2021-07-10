const path = require("path");
const fontawesomeSubset = require("fontawesome-subset");

fontawesomeSubset({ brands: ["btc"] }, path.resolve(__dirname, "dist"));
