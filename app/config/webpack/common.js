const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

let config = {
  entry: {
    'main.bundle.js': './frontend-react/index.js',
    'main.bundle.css': './frontend-react/index.css'
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, '../../public/dist'),
    publicPath: '/dist'
  },
  resolve: {
    alias: {
      amber: path.resolve(__dirname, '../../lib/amber/assets/js/amber.js'),
      '@': path.resolve(__dirname, '../../frontend-vue/src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          'file-loader?name=/[name].[ext]'
        ]
      }
    ]
  },
  plugins: [
  ],
  stats: 'errors-only'
};

module.exports = config;
