var thermostat = new Thermostat();
  function updateTemperature(){
    $('.displayer .temperature').text(thermostat.temperature);
    //$('h2').attr('class', thermostat.energyRating());

    //console.log($('.displayer .temperature').text())
  }

jQuery(document).ready(function($) {

	updateTemperature();

	$('button[name=increase').on('click',     function() {
		thermostat.increaseTemp();
	});

	$('button[name=decrease]').on('click',     function() {
		thermostat.decreaseTemp();
	});

	$('button[name=celsius]').on('click',      function() {
		thermostat.toCelsius();
		$(this).attr('disabled',true);
		$('button[name=fahrenheit]').attr('disabled', false);
	});

	$('button[name=fahrenheit]').on('click',    function() {
		thermostat.toFahrenheit();
		$(this).attr('disabled',true);
		$('button[name=celsius]').attr('disabled', false);
	});

	$('button[name=reset_display]').on('click', function() {
		thermostat.setToInitial();
	});

	$('input[name=savingMode]').change(function() {

		if($(this).is(":checked")) thermostat.switchSavingMode()
			else thermostat.switchSavingMode()
	});

  $('button').on('click', function(){
      updateTemperature();
   });

});