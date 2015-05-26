#!/usr/bin/env node

var fs = require('fs');

module.exports = function(context) {
  fs.unlinkSync(context.opts.plugin.dir + '/www/compile-time.js');
};
