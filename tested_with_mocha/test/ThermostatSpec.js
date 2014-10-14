var Thermostat = require('../lib/Thermostat');
var expect     = require('chai').expect;

var thermostat;

beforeEach(function(){
	thermostat = new Thermostat() 
});

describe('Thermostat', function() {

	context('Initial settings',function(){

		it('should have a default temperature of 20', function() {
			expect(thermostat.temperature).to.eq(20)
		});

		it('has a minimum temperature of 10 degrees', function() {
			expect(thermostat.minTemperature).to.eq(10)			
		});

		it('should have a power saving mode, and be on', function() {
			expect(thermostat.savingMode).to.eq(true)
		});

	});
	

});