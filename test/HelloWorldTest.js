"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("chai");
var chai_1 = require("chai");
var HelloWorld_1 = require("../testingWithMochaAndChai/HelloWorld");
require("mocha");
//import * as chai from "../../chai/lib/Chai";
var controller;
beforeEach(function () {
    controller = new HelloWorld_1.HelloWorld();
});
describe('Hello function', function () {
    it('should return hello world', function () {
        chai_1.expect(controller.hello()).to.equal('Hello World!');
    });
});
describe('Bye function', function () {
    it('should return bye world', function () {
        chai_1.expect(controller.bye()).to.equal('Hello World!');
    });
});
