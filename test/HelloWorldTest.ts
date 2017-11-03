import 'chai';
import {expect} from 'chai';
import {HelloWorld} from "../testingWithMochaAndChai/HelloWorld";
import 'mocha';



let controller: HelloWorld;


beforeEach(()=>{
    controller = new HelloWorld();
});

describe('Hello function', () =>{
    it('should return hello world', () => {
        expect(controller.hello()).to.equal('Hello World!');
    });
});

describe('Bye function', () =>{
    it('should return bye world', () => {
        expect(controller.bye()).to.equal('bye World!');
    });
});



