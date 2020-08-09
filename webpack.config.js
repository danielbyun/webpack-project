// webpack configurations
module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    // where to serve the content from
    contentBase: "./dist",
  },
  module: {
    rules: {
      test: /\.(.js}.jsx)$/,
      exclude: /node_modules/,
      use: ["babel-loader"],
    },
  },
  resolve: {
    extensions: ["js", "jsx"],
  },
};
