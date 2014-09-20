/* Script for interface */

// Default settings, before DOM loads.
var thermostat = new Thermostat();
  function updateTemperature(){
    $('.displayer .temperature').text(thermostat.temperature);
    $('h2').attr('class', thermostat.energyRating);
  }


// After document i ready
jQuery(document).ready(function($) {


	$('button[name=celsius]').attr('disabled', true); // avoid convert to Cº when is set to Cº

	updateTemperature();

	//  Increase temp, check for energyRating
	
	$('button[name=increase').on('click',     function() {
		thermostat.increaseTemp();
		thermostat.energyRatingCelsius();
		thermostat.energyRatingFahrenheit();
	});


	//  Decrease temp, check for energyRating

	$('button[name=decrease]').on('click',     function() {
		thermostat.decreaseTemp();
		thermostat.energyRatingCelsius();
		thermostat.energyRatingFahrenheit();
	});


	// Converts to Celsius

	$('button[name=celsius]').on('click',      function() {
		thermostat.toCelsius();
		$(this).attr('disabled',true);
		$('button[name=fahrenheit]').attr('disabled', false);
	});


	// Converts to Fahrenheit

	$('button[name=fahrenheit]').on('click',    function() {
		thermostat.toFahrenheit();
		$(this).attr('disabled',true);
		$('button[name=celsius]').attr('disabled', false);
	});


	// Reset to default

	$('button[name=reset_display]').on('click', function() {
		thermostat.setToInitial();
	});


	// Toggling the saving mode 

	$('input[name=savingMode]').change(function() {
		if($(this).is(":checked")) thermostat.switchSavingMode()
			else thermostat.switchSavingMode()
	});


	// Adding functionality to each button

	$('button').on('click', function(){
      updateTemperature();
   });

});