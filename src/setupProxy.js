const apiMocker = require('mocker-api')
const { resolve } = require('path')

module.exports = function(app) {
  apiMocker(app, resolve('./src/mocker/index.js'), {
    proxy: {
      '/repos/(.*)': 'https://api.github.com/',
    },
    changeHost: true,
  });
}
