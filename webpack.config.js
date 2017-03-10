module.exports = {
  entry: "./assets/js/main.js",
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        // run any matched files through the babel loader
        test: /\.js$/,
        // do not look into node_modules
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          // use es2015 preset
          presets: ["es2015"]
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
