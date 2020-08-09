import { b as bootstrapLazy } from './index-82dbec90.js';
import { p as patchBrowser } from './patch-706d7f7f.js';
patchBrowser().then(function (options) {
    return bootstrapLazy([["my-component", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]]], options);
});
