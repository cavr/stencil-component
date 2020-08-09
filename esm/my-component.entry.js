import { r as registerInstance, h } from './index-82dbec90.js';

function format(first, middle, last) {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleOnClick = () => {
            console.log('hello');
        };
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", { onClick: this.handleOnClick }, "Hello ", this.getText());
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
