const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server.ts",
  devtool:"eval-source-map",
  watch: true,
  target: "node",
  externals: [
    nodeExternals({
      whitelist: ["webpack/hot/poll?100"]
    })
  ],
  module: {
    rules: [
      {
        test: /.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  }
};