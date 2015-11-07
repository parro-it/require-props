# require-props

Require a set of modules, and add them as properties to target.

[![NPM module](https://img.shields.io/npm/v/require-props.svg)](https://npmjs.org/package/require-props)
[![NPM downloads](https://img.shields.io/npm/dt/require-props.svg)](https://npmjs.org/package/require-props)

## Installation

```bash
npm install --save require-props
```

## Usage

```javascript
  const requireProps = require('require-props')(__dirname);
  const target = {name:'target'};
  requireProps(target, ['./fixtures/module1', './fixtures/module-2']);
  console.dir(target);
  // { name: 'target', module1: 1, 'module-2': 'target' }
```

Each required modules must export a function receiving the app instance and returning an object that is then added as a property
on the app instance, named as the modules itself.

## Api

requireProps(target, modules)

* target: object - object where all properties are created
* modules: array - list of modules to requires. They could be module names or relative paths.


## License

The MIT License (MIT)

Copyright (c) 2015 Andrea Parodi



