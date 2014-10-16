function Thermostat(){
	//this.setDefaultValues();
	this.savingMode     = true;
	this.temperature    = 20
	this.energyRating   = '';
	this._isCelsius     = true;
}

Thermostat.prototype.setDefaultValues = function() {
	this.savingMode  = true;
	
	if(!this._isCelsius)   return this.temperature = 68;
    else	return this.temperature = 20;
	
}

Thermostat.prototype.toggleSavingMode = function() {
	this.savingMode ? this.savingMode = false : this.savingMode = true
}

Thermostat.prototype.increaseTemp = function() {
	if (this.savingMode && this.temperature < 25) this.temperature += 1  
		else return 32;
}

Thermostat.prototype.decreaseTemp = function() {
	if (this.temperature <= 10) return this.temperature = 10;
		else this.temperature -= 1;
}

Thermostat.prototype.switchMetrics = function() {
	if(this._isCelsius) return this.toFahrenheit 
		else return this.toCelsius 
}

Thermostat.prototype.toCelsius = function() {

	this._isCelsius = true
	return this.temperature = Math.round(((this.temperature -32)*5)/9)
}

Thermostat.prototype.toFahrenheit = function() {

	this._isCelsius = false
	return this.temperature = Math.round(((this.temperature*9)/5)+32)
}

module.exports = Thermostat;