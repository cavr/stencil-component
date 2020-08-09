'use strict';

const index = require('./index-053bc794.js');
const patch = require('./patch-3a0039cf.js');

patch.patchBrowser().then(options => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
