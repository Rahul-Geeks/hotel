var chai = require('chai');
var expect = chai.expect;
var Hotel = require('../../app/models/hotels.model');

describe('Hotels Model Happy Test Flow',()=>{
    var hotel = new Hotel({
        name:"Hotel Grand Kasino",
        stars:5,
        description:"Best Hotel In BanjaHills",
        currency:"$200",
        reviews:[{
            name:"john",
            id:"102920",
            review:"Costly",
            rating:5
        }]
    });
    it('Test for Hotel model Data Exist',()=>{        
        expect(hotel).to.have.property('name').to.equal("Hotel Grand Kasino");
        expect(hotel).to.have.property('stars').to.equal(5);
        expect(hotel).to.have.property('description').to.equal("Best Hotel In BanjaHills");
        expect(hotel).to.have.property('currency').to.equal("$200");
        expect(hotel).to.have.property('reviews');
        expect(hotel).to.have.property('reviews').with.lengthOf(1);
        expect(hotel.reviews[0]).to.have.property('rating'); 
    });
    it('Test for Hotel model Data Type Evaluation',()=>{
        expect(hotel).to.have.property('name').to.be.a('string');
        expect(hotel).to.have.property('stars').to.be.a('number');
        expect(hotel).to.have.property('description').to.be.a('string');
        expect(hotel).to.have.property('currency').to.be.a('string');
        expect(hotel).to.have.property('reviews').to.be.a('array');
     });
})