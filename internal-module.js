var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        Rectangle.prototype.getArea = function () {
            return this.height * this.width;
        };
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
window.onload = function () {
    var rect = new Shapes.Rectangle(10, 40);
    var area = rect.getArea();
    alert(area);
};
