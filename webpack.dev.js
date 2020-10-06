const path = require('path')
const Dotenv = require('dotenv-webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier-2')

function isDev() {
  return process.env.NODE_ENV === 'development'
}

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  watchOptions: {
    ignored: /node_modules/,
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv(),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ],
}
