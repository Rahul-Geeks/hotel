var should = require('chai').should();
var op = require('./op');

describe("Validation For Type check BDD with Should::",function(){
    // it((msg,callback)
    it("Value Hello Should be String Happy Flow",function(){
        // expect(op.getData('Hello')).to.be.string;
        op.getData('Hello').should.be.a('string');
    });
    it("Value 23 Should be Number Happy Flow",function(){
        op.getData(23).should.be.a('number');
    });
    it("Value 23 Should be Number Happy Flow",function(){
        op.getData({ names:['john','sam','rohn']}).should.be.a('object');
        op.getData({ names:['john','sam','rohn']}).should.have.property('names');
        op.getData({ names:['john','sam','rohn']}).should.not.have.property('ages');
        op.getData({ names:['john','sam','rohn']}).should.have.property('names').that.contains('john');
    });


});