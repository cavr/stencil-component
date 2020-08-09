import { r as registerInstance, h } from './index-82dbec90.js';
function format(first, middle, last) {
    return (first || '') + (middle ? " " + middle : '') + (last ? " " + last : '');
}
var myComponentCss = ":host{display:block}";
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
        this.handleOnClick = function () {
            console.log('hello');
        };
    }
    MyComponent.prototype.getText = function () {
        return format(this.first, this.middle, this.last);
    };
    MyComponent.prototype.render = function () {
        return h("div", { onClick: this.handleOnClick }, "Hello ", this.getText());
    };
    return MyComponent;
}());
MyComponent.style = myComponentCss;
export { MyComponent as my_component };
