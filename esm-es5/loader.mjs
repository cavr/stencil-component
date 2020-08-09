import { b as bootstrapLazy } from './index-82dbec90.js';
import { a as patchEsm } from './patch-706d7f7f.js';
var defineCustomElements = function (win, options) {
    if (typeof window === 'undefined')
        return Promise.resolve();
    return patchEsm().then(function () {
        return bootstrapLazy([["my-component", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]]], options);
    });
};
export { defineCustomElements };
