'use strict';
const path = require('path');

const requireProps = baseDir => (target, modules) => {
  modules.forEach(modulePath => {
    try {
      let m = modulePath;
      if (m[0] === '.' || m[0] === path.sep) {
        m = path.resolve(baseDir, m);
      }
      const name = path.basename(m, path.extname(m));
      target[name] = require(m)(target);
    } catch (err) {
      process.stdout.write(`While loading ${name}:\n${err.stack}\n\n`);
    }
  });
};

module.exports = requireProps;
