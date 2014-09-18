function Thermostat(){
	this.temperature = 20;
	this.savingMode  = true;
}

Thermostat.prototype.setToInitial = function() {
	return 20;
}

Thermostat.prototype.increaseTemp = function() {
	if(this.savingMode) return this.temperature = 25
	return this.temperature +=1
}

Thermostat.prototype.decreaseTemp = function() {
	if(this.temperature === 10 ) return this.temperature 
	return this.temperature -=1
}