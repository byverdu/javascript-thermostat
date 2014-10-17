var Thermostat = (function(){

   this.savingMode   = true;
   this.temperature  = 20;
   //this.energyRating = _setEnergyRating();
   this._isCelsius   = true;

	function setDefaultValues(){
		this._isCelsius  = true;
		this.savingMode  = true;
		this.temperature = 20;
	}

	function toggleSavingMode(){
		this.savingMode ? this.savingMode = false : this.savingMode = true
	}

	function increaseTemp(){
		if (this.savingMode && this.temperature < 25) this.temperature += 1  
	  else this.temperature = 32;
	}

	function decreaseTemp(){
		if(this.temperature <= 10 ) this.temperature = 10;
		else this.temperature -=1
	}

	return{
		savingMode       : this.savingMode,
		temperature      : this.temperature,
		setDefaultValues : setDefaultValues,
		toggleSavingMode : toggleSavingMode,
		increaseTemp     : increaseTemp,
		decreaseTemp     : decreaseTemp
	}
})();

module.exports = Thermostat;