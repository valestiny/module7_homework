function ElectricalAppliance (name, manufacturer, power, turn ) {
  this.name = name,
  this.turn = function() {
    console.log(`The ${this.name} is switched ${turn}.`)
  }
  this.power = function() {
    console.log(`Power Consumption of the ${this.name} is ${power} W.`)
  }
  this.manufacturer = function() {
     console.log(`The ${name} is manufacturied by ${manufacturer}.`)
  }        
}
