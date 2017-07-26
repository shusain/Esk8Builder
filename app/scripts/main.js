// Code goes here

angular.module('myApp', [])

  // Inject all the data services into the controller so they can be bound into the view
  .controller("MyCtrl", function(PowerAndDriveTrain, Batteries, LoopKeyOrSwitches, BatteryChargers, ESC){
    var ctrl = this;
    
    ctrl.categories = [
      PowerAndDriveTrain.data,
      Batteries.data,
      LoopKeyOrSwitches.data,
      BatteryChargers.data,
      ESC.data,
      {
        label: "Controller or Transmitter and Receiver"
      },
      {
        label: "Enclosures"
      },
      {
        label: "Wiring and connectors"
      },
      {
        label: "Lights, telemetry, extra electronics"
      },
      {
        label: "Decks"
      },
      {
        label: "Wheels"
      },
      {
        label: "Risers"
      }
    ];
  })

;