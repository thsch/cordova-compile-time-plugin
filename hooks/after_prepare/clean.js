#!/usr/bin/env node

var fs = require('fs');

module.exports = function(context) {
  ['config', 'env'].forEach(function(name) {
    fs.unlinkSync(
      context.opts.plugin.dir + '/www/compile-time/' + name + '.js'
    );
  });
};
