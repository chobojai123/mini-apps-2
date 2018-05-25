const path = require('path');
  const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SRC_DIR = path.join(__dirname, '/public/src');
const DIST_DIR = path.join(__dirname, '/public/dist');


module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 25000,
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client/src'),
        exclude: ['node_modules'],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            'postcss-loader'
          ]
        })
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            'sass-loader'
          ]
        })
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
  ]
};