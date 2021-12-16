var assert = require('chai').assert;
var op = require('./op');

// describe(msg,callback)
describe("Validation For Positive Value ::",function(){
    // it((msg,callback)
    it("Value Should be Null Happy Flow",function(){
        assert.equal(op.isNull(null),true);
    });
    it("Value Should be Empty Happy Flow",function(){
        assert.equal(op.isEmpty(''),true);
    });
    it("Value Should be Undefined Happy Flow",function(){
        assert.equal(op.isUndefined(undefined),true);
    });

});
describe("Validation For Negative Value ::",function(){
    // it((msg,callback)
    it("Value Should be Null Happy Flow",function(){
        assert.notEqual(op.isNull(null),false);
    });
    it("Value Should be Empty Happy Flow",function(){
        assert.notEqual(op.isEmpty(''),false);
    });
    it("Value Should be Undefined Happy Flow",function(){
        assert.notEqual(op.isUndefined(undefined),false);
    });
});
describe("Validation For Other Value ::",function(){
    // it((msg,callback)
    it("Value Should be Null /*  */Happy Flow",function(){
        assert.equal(op.isNull('Hello'),false);
    });
    it("Value Should be Empty Happy Flow",function(){
        assert.equal(op.isEmpty('Hello'),false);
    });
    it("Value Should be Undefined Happy Flow",function(){
        assert.equal(op.isUndefined(null),false);
    });
});

describe("Validation For Type check ::",function(){
    // it((msg,callback)
    it("Value Hello Should be String Happy Flow",function(){
        assert.equal(op.isString('Hello'),true);
    });
    it("Value 20 Should be Not String",function(){
        assert.equal(op.isString(20),false);
    });
    it("Value hello Should be a String",function(){
        assert.typeOf("hello",'string');
    });
    it("Value hello Should be a String",function(){
        assert.typeOf(op.getData('Hello'),'string');
    });
    it("Value 20 Should be a Number Happy Flow",function(){
        assert.typeOf(op.getData(20),'number');
    });
   
});