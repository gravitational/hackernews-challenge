const HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});



module.exports = {
  mode: 'development',
  entry: __dirname + '/src/js/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader"
      },
    ]
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },
  plugins: [
    HTMLConfig
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  }
};

