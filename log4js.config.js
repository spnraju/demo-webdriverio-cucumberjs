const log4js = require('log4js');

log4js.configure({
  appenders: {
    console: {type: 'stdout'},
  },
  categories: {
    default: {appenders: ['console'], level: 'info'},
  },
});

module.exports = { log4js }