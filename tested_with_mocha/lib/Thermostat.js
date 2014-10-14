function Thermostat(){
	this.temperature    = 20;
	this.minTemperature = 10;
	this.savingMode     = true;
}

Thermostat.prototype.setDefaultValues = function() {
	this.temperature = 20;
}

Thermostat.prototype.toggleSavingMode = function() {
	this.savingMode ? this.savingMode = false : this.savingMode = true
}

module.exports = Thermostat;