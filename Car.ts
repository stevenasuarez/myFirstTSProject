import {Engine} from "./Engine";

namespace Shapes {
    class Car {

        private engine: Engine;

        constructor(engine: Engine) {
            this.engine = engine;
        }

        get getEngine(): Engine {
            return this.engine;
        }


        set setEngine(value: Engine) {
            if (value == undefined) {
                throw 'Please supply an engine';
            }
            this.engine = value;
        }

        start() {
            alert('Car engine started' + this.engine.engineType);
        }
    }


    window.onload = function () {
        var engine = new Engine(300, 'V8');
        var car = new Car(engine);
        alert(car.getEngine.engineType);
        car.start();
    };
}