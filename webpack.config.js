var path = require("path");
var config = {
  // starting at src folder
  context: path.resolve(__dirname, "src"),
  // main entry point to application
  entry: "./js/index.js",
  output: {
    // place output bundle here
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  // watch files for changes
  watch: true,
  // load modules to process different files
  module: {
    rules: [{
      // allows to use ES 2015 features
      test: /\.js$/, // look for js files
      // look only in javascript folder
      include: [path.resolve(__dirname, "src/js")],
      use: {
        // run through babel
        loader: "babel-loader",
        options: {
          // use es2015 preset
          presets: ["es2015"]
        }
      }
    }, {
      // bundle styles in output file
      test: /\.(sass|scss)$/, // look for sass
      // look only in css folder
      include: [path.resolve(__dirname, "src/css")],
      // the order of use is backward!
      use: ["style-loader", "css-loader", "sass-loader"]
    }, {
      // copy static html and favicon
      test: /\.(html|ico)$/,
      // look in root src
      include: [path.resolve(__dirname, "src")],
      // copy them with file-loader
      use: ["file-loader?name=[path][name].[ext]"]
    }]
  },
  // configure development server
  devServer: {
    // serve content from dist folder
    contentBase: path.resolve(__dirname, "dist"),
    compress: true, // enable gzip compression
    port: 3001 // default port
  }
};
module.exports = config;
