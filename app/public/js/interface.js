var thermostat = new Thermostat();
  function updateTemperature(){
    $('.displayer .temperature').text(thermostat.temperature);
    //$('h2').attr('class', thermostat.energyRating());

    //console.log($('.displayer .temperature').text())
  }

jQuery(document).ready(function($) {

	updateTemperature();

	$('.increase').on('click', function() {
		thermostat.increaseTemp();
	});

	$('.decrease').on('click', function() {
		thermostat.decreaseTemp();
	});

	$('.celsius').on('click', function() {
		thermostat.toCelsius();
	});

	$('.fahrenheit').on('click', function() {
		thermostat.toFahrenheit();
	});

	$('.reset_display').on('click', function() {
		thermostat.setToInitial();
	});

  $('button').on('click', function(){
      updateTemperature();
   });

});