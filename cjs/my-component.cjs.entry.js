'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-053bc794.js');

function format(first, middle, last) {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.handleOnClick = () => {
            console.log('hello');
        };
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return index.h("div", { onClick: this.handleOnClick }, "Hello ", this.getText());
    }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
