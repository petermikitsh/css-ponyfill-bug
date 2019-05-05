const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devServer: {
    host: '0.0.0.0'
  },
  entry: './index.js',
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      template: './index.ejs'
    })
  ]
};
