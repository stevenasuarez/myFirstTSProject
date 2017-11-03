"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Engine_1 = require("./Engine");
var Shapes;
(function (Shapes) {
    var Car = (function () {
        function Car(engine) {
            this.engine = engine;
        }
        Object.defineProperty(Car.prototype, "getEngine", {
            get: function () {
                return this.engine;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "setEngine", {
            set: function (value) {
                if (value == undefined) {
                    throw 'Please supply an engine';
                }
                this.engine = value;
            },
            enumerable: true,
            configurable: true
        });
        Car.prototype.start = function () {
            alert('Car engine started' + this.engine.engineType);
        };
        return Car;
    }());
    window.onload = function () {
        var engine = new Engine_1.Engine(300, 'V8');
        var car = new Car(engine);
        alert(car.getEngine.engineType);
        car.start();
    };
})(Shapes || (Shapes = {}));
