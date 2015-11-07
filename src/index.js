'use strict';
const path = require('path');

const requireProps = baseDir => (target, modules) => {
  modules.forEach(modulePath => {
    let m = modulePath;
    if (m[0] === '.' || m[0] === path.sep) {
      m = path.resolve(baseDir, m);
    }
    const name = path.basename(m, path.extname(m));
    target[name] = require(m)(target);
  });
};

module.exports = requireProps;
