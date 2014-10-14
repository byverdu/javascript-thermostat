var Thermostat = require('../lib/Thermostat');
var expect     = require('chai').expect;

var thermostat;

beforeEach(function(){
	thermostat = new Thermostat() 
});

describe('Thermostat', function() {
	
	it('should have a default temperature of 20', function() {
		expect(thermostat.temperature).to.eq(20)
	});

});