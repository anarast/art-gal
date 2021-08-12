const path = require('path');

module.exports = {
  entry: './src/gallery.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};