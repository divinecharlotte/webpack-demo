const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
mode:"development",
 entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
   filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};