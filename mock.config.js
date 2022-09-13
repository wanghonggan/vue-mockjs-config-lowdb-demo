const { resolve } = require('path');

module.exports = {
  subfiles: [
    resolve(__dirname, 'src/mock/user.mock.config.js'),
    resolve(__dirname, 'src/mock/goods.mock.config.js'),
  ],
};
