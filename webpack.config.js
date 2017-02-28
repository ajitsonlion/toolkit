const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const root = path.join.bind(path, ROOT);

module.exports = {
  entry: ['./app.js', './src/themes/exb-light-theme.scss'],
  output: {
    filename: 'dist/bundle.js'
  },
  module: {

    rules: [
      /*
       your other rules for JavaScript transpiling go in here
       */
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
        include: [root('./src/themes')]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: 'file-loader?limit=1024&name=./fonts/[name].[ext]'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./dist/themes/[name].css'),
   ],
};
