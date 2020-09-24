const path = require('path')
const Dotenv = require('dotenv-webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier-2')
const TerserPlugin = require('terser-webpack-plugin')

function isDev() {
  return process.env.NODE_ENV === 'development'
}

module.exports = {
  entry: './src/index.js',
  watchOptions: {
    ignored: /node_modules/,
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  devtool: isDev() ? 'eval-source-map' : '',
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
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          compress: {
            pure_funcs: ['console.log'], // functions to drop
          },
        },
      }),
    ],
  },
}
