var Thermostat = require('../lib/Thermostat');
var expect     = require('chai').expect;

var thermostat;

beforeEach(function(){
	thermostat = new Thermostat() 
});

describe('Thermostat', function() {

	context('Initial settings',function(){

		it('should have a default temperature of 20', function() {
			expect(thermostat.temperature).to.eq(20);
		});

		it('has a minimum temperature of 10 degrees', function() {
			expect(thermostat.minTemperature).to.eq(10);			
		});

		it('should have a power saving mode, and be on', function() {
			expect(thermostat.savingMode).to.eq(true);
		});

		it('could be able to be reset', function() {
			
			thermostat.temperature = 25;
			thermostat.setDefaultValues();
			expect(thermostat.temperature).to.eq(20);
		});

		it('can switch off the savingMode', function() {
			thermostat.savingMode;
			thermostat.toggleSavingMode();
			expect(thermostat.savingMode).to.eq(false);
		});

		it('can switch on the savingMode', function() {
			thermostat.savingMode = false;
			thermostat.toggleSavingMode();
			expect(thermostat.savingMode).to.eq(true);
		});

	});
	

});