describe("Thermostat", function() {
  
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Default settings', function() {
    
    it('should have a default temperature of 20', function() {
      expect(thermostat.temperature).toEqual(20)
    });

    // it('has a minimum temperature of 10 degrees', function() {
      
    // });

    it('should have a power saving mode, and be on', function() {
      expect(thermostat.savingMode).toBe(true)
    });
    it('could be able to be reset', function() {
      thermostat.temperature  = 25;
      expect(thermostat.setToInitial()).toEqual(20);
    });
  });

//   describe('main functionality', function() {
    
//     it('You can increase the temp with the up button', function() {
//       thermostat.increaseTemp()
//       expect(thermostat.)
//     });
//   });
  
// });



// Thermostat starts at 20 degrees ------------------------

// You can increase the temp with the up button

// You can decrease the temp with the down button

// The minimum temperature is 10 degrees

// If power saving mode is on, the maximum temperature is 25 degrees

// If power saving mode is off, the maximum temperature is 32 degrees

// Power saving mode is on by default ---------------------------

// You can reset the temperature to 20 by hitting the reset button ---------------------------

// The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red

// After every temperature change, the thermostat makes a POST request to localhost:4567/temperature_change, with the new temperature