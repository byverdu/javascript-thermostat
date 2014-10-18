var Thermostat = require('../lib/ThermoPatterns');
var expect     = require('chai').expect;

// var thermostat;

// beforeEach(function(){
// 	thermostat = new Thermostat() 
// });

describe('Thermostat', function() {

	context('Initial settings',function(){

		it('should have a default temperature of 20', function() {
			expect(Thermostat.temperature).to.eq(20);
		});

		it('should have a power saving mode, and be on', function() {
			expect(Thermostat.savingMode).to.eq(true);
		});

		it('has a minimum temperature of 10 degrees', function() {
			Thermostat.temperature = 10;
			Thermostat.decreaseTemp();
			expect(Thermostat.temperature).to.eq(10);
		});

		it('could be able to be reset', function() {
			Thermostat.savingMode  = false; 
			Thermostat.temperature = 25;
			Thermostat.setDefaultValues();
			expect(Thermostat.temperature).to.eq(20);
			expect(Thermostat.savingMode).to.eq(true);
		});

		it('can switch off the savingMode', function() {
			Thermostat.savingMode;
			Thermostat.toggleSavingMode();
			expect(Thermostat.savingMode).to.eq(false);
		});

		it('can switch on the savingMode', function() {
			Thermostat.savingMode = false;
			Thermostat.toggleSavingMode();
			expect(Thermostat.savingMode).to.eq(true);
		});
	});

	context('Main functionality',function(){

		it('can increase the temp with the up button', function() {
			Thermostat.temperature = 20;
			Thermostat.increaseTemp();
			expect(Thermostat.temperature).to.eq(21);
		});

		it('can decrease the temp with the down button', function() {
			Thermostat.temperature = 22;
			Thermostat.decreaseTemp();
			expect(Thermostat.temperature).to.eq(21);
		});

		it('the minimum temperature is 10', function() {
			Thermostat.temperature = 10;
			Thermostat.decreaseTemp();
			expect(Thermostat.temperature).to.eq(10);
		});

		it('when savingMode is set to on the maximum temperature is 25', function() {
			Thermostat.temperature = 24;
			Thermostat.increaseTemp();
			expect(Thermostat.temperature).to.eq(25)
		});

		it('when is set to off the maximum temperature is 32', function() {
			Thermostat.savingMode = false;
			Thermostat.temperature = 31;
			Thermostat.increaseTemp();
			Thermostat.increaseTemp();
			expect(Thermostat.temperature).to.eq(32);
		});
	});
});
