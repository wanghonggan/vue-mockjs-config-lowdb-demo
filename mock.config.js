const { resolve } = require('path');

module.exports = {
  subfiles: [
    resolve(__dirname, 'mock/user.mock.config.js'),
    resolve(__dirname, 'mock/goods.mock.config.js'),
  ],
};
