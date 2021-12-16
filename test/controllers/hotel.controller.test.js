var mongoose = require('mongoose');
var Hotel = require('../../app/models/hotels.model');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var chaiHttp = require('chai-http');
var server  = require('../../server');
var htroute  = require('../../app/routes/hotel.route');
//add chaihttp into chai assertion liberray
chai.use(chaiHttp);

describe('GET Hotels Data Test',()=>{
    it("It Should GET all Hotels data Test Happy Flow",()=>{
        chai.request('http://127.0.0.1:3030/api')
        .get('/hotels')
        .end((error,res)=>{
            res.should.be.json;
            res.should.have.status(200);
            // console.log(res);
            res.body.should.be.a('array');
            res.type.should.equal('application/json');
            res.body[0].should.have.property('_id');
            res.body[0].should.have.property('name');
            res.body[0].should.have.property('stars');
            res.body[0].should.have.property('reviews');
            res.body[0].should.not.have.property('age');           

        })
    })
})