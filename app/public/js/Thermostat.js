function Thermostat(){
	this.temperature   = 20;
	this.savingMode    = true;
	this._isCelsius    = true;
	this.energyRating  = 'average';
}

Thermostat.prototype.setToInitial = function() {
	
	if (this._isCelsius) return this.temperature = 20;

		else return this.temperature = 68;
}

Thermostat.prototype.switchSavingMode = function() {
	
	this.savingMode ? (this.savingMode = false) : (this.savingMode = true)
}

Thermostat.prototype.maxCelsiusTempSavingMode = function() {

	if(this.savingMode) return 25;
		else return 32
}

Thermostat.prototype.maxFahrenTempSavingMode = function() {

	if(!this._isCelsius && this.savingMode) return 75;
		else return 90
}

Thermostat.prototype.increaseTemp = function() {

	if(!this._isCelsius){

		if(this.temperature < this.maxFahrenTempSavingMode())  this.temperature +=1
	}

	if(this._isCelsius){

		if(this.temperature < this.maxCelsiusTempSavingMode())  this.temperature +=1
	}
}

Thermostat.prototype.decreaseTemp = function() {
	
	if(this._isCelsius && this.temperature > 10 ) this.temperature -=1

	else if(!this._isCelsius && this.temperature > 50) this.temperature -=1
}

Thermostat.prototype.checkEnergyRating = function() {

	// if(!this._isCelsius){

	// 	if(this.temperature < 64) this.energyRating = 'efficient';
			
	// 	if(this.temperature > 77)  this.energyRating = 'inefficient';
	// }  is more than 18 degrees but less than 25

	if(this._isCelsius){

		if(this.temperature < 18){ 

			this.energyRating = 'efficient';
		
		} else if(this.temperature > 25){ 

				this.energyRating = 'inefficient';

			} else this.energyRating = 'average';
	}


}

Thermostat.prototype.toCelsius = function() {

	this._isCelsius = true
	return this.temperature = Math.round(((this.temperature -32)*5)/9)
}

Thermostat.prototype.toFahrenheit = function() {

	this._isCelsius = false
	return this.temperature = Math.round(((this.temperature*9)/5)+32)
}
