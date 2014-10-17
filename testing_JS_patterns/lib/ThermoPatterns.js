
var Thermostat = (function(){

   this.savingMode   = true;
   this.temperature  = 20;
   //this.energyRating = _setEnergyRating();
   this._isCelsius   = true;

	function setDefaultValues(){
		this._isCelsius;
		this.savingMode  = true;
		this.temperature = 20;
	}

	function toggleSavingMode(){
		this.savingMode ? this.savingMode = false : this.savingMode = true
	}

	return{
		savingMode       : this.savingMode,
		temperature      : this.temperature,
		setDefaultValues : setDefaultValues,
		toggleSavingMode : toggleSavingMode
	}
})();