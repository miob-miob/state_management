const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode:'development',
  devtool: 'inline-source-map',
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin()],
  entry: {
    reduxx: './src/reduxx/reduxx.index.js',
  },
  output: {
    filename: "[name].bundle.js",
    path:path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8888
  }
};
