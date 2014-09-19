function Thermostat(){
	this.temperature   = 20;
	this.savingMode    = true;
	this.energyRating  = 'average';
	this._isCelsius    = true
}

Thermostat.prototype.setToInitial = function() {
	
return this.temperature = 20;
}

Thermostat.prototype.switchSavingMode = function() {
	
	this.savingMode ? (this.savingMode = false) : (this.savingMode = true)
}

Thermostat.prototype.maxTempSavingMode = function() {

	if(this.savingMode) return 25;
		return 32
}

Thermostat.prototype.increaseTemp = function() {
	
	if(this.temperature < this.maxTempSavingMode())  this.temperature +=1
}

Thermostat.prototype.decreaseTemp = function() {
	
	if(this.temperature > 10 ) this.temperature -=1
}

Thermostat.prototype.checkEnergyRating = function() {
	if(this.temperature < 18 ) this.energyRating = 'efficient'
	if(this.temperature > 25)  this.energyRating = 'inefficient'
}

Thermostat.prototype.toCelsius = function() {

	this._isCelsius = true
	return this.temperature = ((this.temperature -32)*5)/9
}

Thermostat.prototype.toFahrenheit = function() {

	this._isCelsius = false
	return this.temperature = ((this.temperature*9)/5)+32
}
