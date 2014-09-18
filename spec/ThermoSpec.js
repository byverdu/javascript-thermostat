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
      expect(thermostat.savingMode).toBe(true)
    });

    it('could be able to be reset', function() {
      thermostat.temperature  = 25;
      expect(thermostat.setToInitial()).toEqual(20);
    });
  });

  describe('main functionality', function() {
    
    it('can increase the temp with the up button', function() {
      thermostat.increaseTemp()
      expect(thermostat.temperature).toEqual(21)
    });

    it('can decrease the temp with the down button', function() {
      thermostat.decreaseTemp()
      expect(thermostat.temperature).toEqual(19)
    });
  });

  describe('and the saving mode', function() {
    
    it('when is on', function() {
      thermostat.savingMode
      expect(thermostat.temperature).toEqual(25)
    });

  });
  
});



// Thermostat starts at 20 degrees ------------------------

// You can increase the temp with the up button -------------------

// You can decrease the temp with the down button -------------------

// The minimum temperature is 10 degrees

// If power saving mode is on, the maximum temperature is 25 degrees

// If power saving mode is off, the maximum temperature is 32 degrees

// Power saving mode is on by default ---------------------------

// You can reset the temperature to 20 by hitting the reset button ---------------------------

// The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red

// After every temperature change, the thermostat makes a POST request to localhost:4567/temperature_change, with the new temperature