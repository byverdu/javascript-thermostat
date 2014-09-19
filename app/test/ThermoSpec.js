describe("Thermostat", function() {
  
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Default settings', function() {
    
    it('should have a default temperature of 20', function() {
      expect(thermostat.temperature).toEqual(20)
    });

    it('has a minimum temperature of 10 degrees', function() {
      thermostat.temperature  = 10;
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toEqual(10)
    });

    it('should have a power saving mode, and be on', function() {
      expect(thermostat.savingMode).toBe(true);
    });

    it('could be able to be reset', function() {
      thermostat.temperature  = 18;
      expect(thermostat.setToInitial()).toEqual(20);
    });

    it('can switch off the savingMode', function() {
      thermostat.switchSavingMode();
      expect(thermostat.savingMode).toBe(false)
    });

    it('can switch on the savingMode', function() {
      thermostat.savingMode = false;
      thermostat.switchSavingMode();
      expect(thermostat.savingMode).toBe(true)
    });

    it('has a energy rating of average', function() {
      expect(thermostat.energyRating).toEqual('average')
    });
  });

  describe('main functionality', function() {
    
    it('can increase the temp with the up button', function() {
      thermostat.temperature = 20;
      thermostat.increaseTemp()
      expect(thermostat.temperature).toEqual(21)
    });

    it('can decrease the temp with the down button', function() {
      thermostat.decreaseTemp()
      expect(thermostat.temperature).toEqual(19)
    });
  });

  describe('working with the saving mode', function() {

    describe('when is set to on the', function() {
      
      it('maximum temperature is 25', function() {
        thermostat.temperature  = 25;
        thermostat.increaseTemp();
        expect(thermostat.temperature).toEqual(25)
      });
    });

    describe('when is set to off the', function() {
      
      it('maximum temperature is 32', function() {
        
        thermostat.savingMode   = false;
        thermostat.temperature  = 32;
        thermostat.increaseTemp();
        expect(thermostat.temperature).toEqual(32)
      });
    });
  });


  describe('and energy usage:', function() {
    
    it('should be "efficient" if is less than 18 degrees', function() {
      
      thermostat.temperature = 17;
      thermostat.checkEnergyRating();
      expect(thermostat.energyRating).toEqual('efficient');
    });

    it('should be "average" if is more than 18 degrees but less than 25', function() {
      thermostat.temperature = 22;
      thermostat.checkEnergyRating();
      expect(thermostat.energyRating).toEqual('average');
    });

    it('should be "inefficient" if is more than 25 degrees', function() {
      thermostat.temperature = 26;
      thermostat.checkEnergyRating();
      expect(thermostat.energyRating).toEqual('inefficient');
    });
  });

});
  describe('can display the temperature in different metrics:', function() {

    it('converts to Celsius', function() {
      
      thermostat.temperature = 50;
      thermostat.toCelsius();
      expect(thermostat.temperature).toEqual(10)
    });

    it('converts to Fahrenheit', function() {
      
      thermostat.temperature = 10;
      thermostat.toFahrenheit()
      expect(thermostat.temperature).toEqual(50)
    });

  });

// efficient -- average -- inefficient

// Thermostat starts at 20 degrees ------------------------

// You can increase the temp with the up button -------------------

// You can decrease the temp with the down button -------------------

// The minimum temperature is 10 degrees ------------------------------

// If power saving mode is on, the maximum temperature is 25 degrees----------------------------

// If power saving mode is off, the maximum temperature is 32 degrees --------------------

// Power saving mode is on by default ---------------------------

// You can reset the temperature to 20 by hitting the reset button ---------------------------

// The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red

// After every temperature change, the thermostat makes a POST request to localhost:4567/temperature_change, with the new temperature