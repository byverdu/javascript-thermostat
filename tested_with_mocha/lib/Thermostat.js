function Thermostat(){
	this.savingMode     = true;
	this.temperature    = 20
	this.energyRating   = this._setEnergyRating();
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

Thermostat.prototype._setEnergyRating = function() {

	if(this._isCelsius) this._CelsiusEnergyRating();
    else this._FahrenheitEnergyRating();	
}

Thermostat.prototype._CelsiusEnergyRating = function() {
	if (this.temperature < 18) {

		  this.energyRating = 'efficient';

	} else if (this.temperature > 25 ) {

		 this.energyRating = 'inefficient';
		 
		
		} else this.energyRating = 'average';
}

Thermostat.prototype._FahrenheitEnergyRating = function() {
	if (this.temperature < 64) {

		  this.energyRating = 'efficient';

	} else if (this.temperature > 77 ) {

		 this.energyRating = 'inefficient';
		 
		
		} else this.energyRating = 'average';
}

Thermostat.prototype.increaseTemp = function() {
	
	if(this._isCelsius) this._CelsiusIncreaseTemp();
	  else this._FahrenheitIncreaseTemp()
}

Thermostat.prototype._CelsiusIncreaseTemp = function() {
	if (this.savingMode && this.temperature < 25) this.temperature += 1  
	  else this.temperature = 32;
}

Thermostat.prototype._FahrenheitIncreaseTemp = function() {
  if(this.savingMode && this.temperature < 75 )	this.temperature += 1;
    else this.temperature = 90;
}

Thermostat.prototype.decreaseTemp = function() {
	if(this._isCelsius) this._CelsiusDecreaseTemp()
		else this._FahrenheitDecreaseTemp()
}

Thermostat.prototype._CelsiusDecreaseTemp = function() {
	if (this.temperature <= 10) this.temperature = 10;
		else this.temperature -= 1
}

Thermostat.prototype._FahrenheitDecreaseTemp = function() {
	if (this.temperature <= 50 ) this.temperature = 50 ;
    else this.temperature -= 1
}

Thermostat.prototype.switchMetrics = function() {
	if(this._isCelsius) this.temperature = this._toCelsius() 
		else this.temperature = this._toFahrenheit() 
}

Thermostat.prototype._toCelsius = function() {

	this._isCelsius = true
	return this.temperature = Math.round(((this.temperature -32)*5)/9)
}

Thermostat.prototype._toFahrenheit = function() {

	this._isCelsius = false
	return this.temperature = Math.round(((this.temperature*9)/5)+32)
}

module.exports = Thermostat;