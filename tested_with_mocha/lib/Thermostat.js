function Thermostat(){
	this.temperature    = 20;
	this.minTemperature = 10;
	this.savingMode     = true;
	this.energyRating   = '';
	this._isCelsius     = true;
}

Thermostat.prototype.setDefaultValues = function() {
	this.temperature = 20;
}

Thermostat.prototype.toggleSavingMode = function() {
	this.savingMode ? this.savingMode = false : this.savingMode = true
}

Thermostat.prototype.increaseTemp = function() {
	this.temperature += 1
}

module.exports = Thermostat;