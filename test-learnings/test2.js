var expect = require('chai').expect;
var assert = require('chai').assert;
var op = require('./op');

describe("Validation For Type check BDD::",function(){
    // it((msg,callback)
    it("Value Hello Should be String Happy Flow",function(){
        expect(op.getData('Hello')).to.be.string;
    });
    it("Value Hello Should be String Happy Flow",function(){
        expect(op.getData('Hello')).to.be.a('string');
    });
    it("Value 20 Should be a Number",function(){
        expect(op.getData(20)).to.be.a('number');
    });
    it("Value hello length should be 5",function(){
        expect(op.getData('hello')).to.have.lengthOf(5)
    });
    it("Value Array length should be 5",function(){
        expect(op.getData(['hello',20,'hi'])).to.have.lengthOf(3)
    });
    it("Value Array Should Contains hi Happy Flow",function(){
        // expect(op.getData(['hello',20,'hi'])).contains('hi').with.lengthOf(2)
        expect(op.getData(['hello',20,'hi'])).not.contains ('hi1');
        expect(op.getData(['hello',20,'hi'])[2]).to.have.lengthOf(2)
    });
});