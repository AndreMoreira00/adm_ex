const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    background: './src/background.js',
    contentScript: './src/contentScript.js',
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new Dotenv(), // Adicione o plugin aqui
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  new CopyWebpackPlugin({
      patterns: [
        { from: './style.css', to: 'style.css' }, // Copia o CSS para a pasta dist
      ],
    }),
  ],
};
