let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Itumeleng correctly', function(){
        assert.equal('Hello, Itumeleng', greet('Itumeleng'));
    });
    it('should greet Matombo correctly', function(){
        assert.equal('Hello, Matombo', greet('Matombo'));
    });
});