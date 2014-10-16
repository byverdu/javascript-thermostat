var Thermostat = require('../lib/Thermostat');
var expect     = require('chai').expect;

var thermostat;

beforeEach(function(){
	thermostat = new Thermostat() 
});

describe('Thermostat', function() {

	context('Initial settings',function(){

		it('should have a default temperature of 20', function() {
			expect(thermostat._isCelsius).to.eq(true);
			expect(thermostat.temperature).to.eq(20);
		});

		it('should have a power saving mode, and be on', function() {
			expect(thermostat.savingMode).to.eq(true);
		});

		it('could be able to be reset', function() {
			thermostat.savingMode  = false; 
			thermostat.temperature = 25;
			thermostat.setDefaultValues();
			expect(thermostat.temperature).to.eq(20);
			expect(thermostat.savingMode).to.eq(true);
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

		it('has a energy rating of average', function() {
			thermostat._setEnergyRating();
			expect(thermostat.energyRating).to.eq('average')
		});
	});

	context('Can display the temperature in 2 metrics:',function(){

		context('Celsius degrees', function() {
			
			it('Is the default value', function() {
				expect(thermostat._isCelsius).to.eq(true);
			});

			it('can increase the temp with the up button', function() {
				thermostat.temperature = 20;
				thermostat.increaseTemp();
				expect(thermostat.temperature).to.eq(21);
			});

			it('can decrease the temp with the down button', function() {
				thermostat.temperature = 22;
				thermostat.decreaseTemp();
				expect(thermostat.temperature).to.eq(21);
			});

			it('the minimum temperature is 10', function() {
				thermostat.temperature = 10;
				thermostat.decreaseTemp();
				expect(thermostat.temperature).to.eq(10);
			});

			it('when savingMode is set to on the maximum temperature is 25', function() {
				thermostat.temperature = 25;
				thermostat.increaseTemp();
				expect(thermostat.temperature).to.eq(25)
			});

			it('when is set to off the maximum temperature is 32', function() {
				thermostat.savingMode = false;
				thermostat.temperature = 32;
				thermostat.increaseTemp();
				expect(thermostat.temperature).to.eq(32);
			});

			context("Values for the energy rating", function(){

				it('should be "average" if is more than 18 degrees but less than 25', function() {
					thermostat.temperature = 24;
					thermostat._setEnergyRating();
					expect(thermostat.energyRating).to.equal('average');
				});

				it('should be "efficient" if is less than 18 degrees', function() {
					thermostat.temperature = 15;
					thermostat._setEnergyRating();
					expect(thermostat.energyRating).to.equal('efficient');
				});

				it('should be "inefficient" if is more than 25 degrees', function() {
					thermostat.temperature = 28;
					thermostat._setEnergyRating();
					expect(thermostat.energyRating).to.equal('inefficient');
				});

			});
		});

		xcontext('Fahrenheit degrees', function(){

			it('the metric changes to Celsius after pressing a button', function() {
			  thermostat._isCelsius = false;
				thermostat.switchMetrics();
				expect(thermostat._isCelsius).to.eq(true)
			});

			before(function(){
				thermostat._isCelsius = false;
				thermostat.switchMetrics();
			})
			
			it('the metric changes to Fahrenheit after pressing a button', function() {
				
				//thermostat.switchMetrics();
				expect(thermostat._isCelsius).to.eq(false)
			});


			it('the default temperature is 68 degrees', function() {
				expect(thermostat.temperature).to.eq(68)
			});

			it('could be able to be reset', function() {
			thermostat.savingMode  = false; 
			thermostat.temperature = 72;
			thermostat.setDefaultValues();
			expect(thermostat.temperature).to.eq(68);
			expect(thermostat.savingMode).to.eq(true);
		});
		})


	});
	

});