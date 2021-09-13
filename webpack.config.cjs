const path = require('path');
const babelConfig = require('./babel.config.json');

module.exports = {
  mode: 'development',
  entry: './src/client/index.tsx',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './public/js'),
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules|public)/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
