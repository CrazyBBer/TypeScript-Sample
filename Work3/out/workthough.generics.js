/**
 * Greeter<T>
 */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return this.greeting;
    };
    return Greeter;
})();
var greeter = new Greeter('Hello, world');
var button = document.createElement('button');
button.textContent = "say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
//# sourceMappingURL=workthough.generics.js.map