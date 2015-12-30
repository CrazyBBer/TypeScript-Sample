var Greeter = (function () {
    function Greeter(data) {
        this.data = data;
    }
    Greeter.prototype.run = function () {
        alert(this.data);
    };
    return Greeter;
})();
window.onload = function () {
    var greeter = new Greeter("Clark");
    greeter.run();
};
//# sourceMappingURL=main.js.map