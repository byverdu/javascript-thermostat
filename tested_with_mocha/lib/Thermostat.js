function Thermostat(){
	this.setDefaultValues();
	this.minTemperature = 10;
	this.energyRating   = '';
	this._isCelsius     = true;
}

Thermostat.prototype.setDefaultValues = function() {
	this.temperature = 20;
	this.savingMode  = true;
}

Thermostat.prototype.toggleSavingMode = function() {
	this.savingMode ? this.savingMode = false : this.savingMode = true
}

Thermostat.prototype.increaseTemp = function() {
	if (this.savingMode && this.temperature <= 25) this.temperature += 1  
		else this.temperature = 32;
	
	
}

Thermostat.prototype.decreaseTemp = function() {
	this.temperature -= 1
}

module.exports = Thermostat;