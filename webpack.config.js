var config = require('./webpack.config.base');

config.entry = './specs/index.js';
config.output = {
  path: __dirname,
  filename: 'dist/test/bundle.js'
};
config.node = {
  fs: 'empty'
};

module.exports = config;
