// Code goes here

angular.module('myApp', [])

  // Inject all the data services into the controller so they can be bound into the view
  .controller("MyCtrl", function(
    PowerAndDriveTrain,
    Batteries,
    LoopKeyOrSwitches,
    BatteryChargers,
    ESC,
    ControllerAndReceiver,
    Enclosures,
    WiringAndConnectors,
    OtherElectronics,
    Decks,
    Wheels,
    Risers) {
    var ctrl = this;
    
    ctrl.categories = [
      PowerAndDriveTrain.data,
      Batteries.data,
      LoopKeyOrSwitches.data,
      BatteryChargers.data,
      ESC.data,
      ControllerAndReceiver.data,
      Enclosures.data,
      WiringAndConnectors.data,
      OtherElectronics.data,
      Decks.data,
      Wheels.data,
      Risers.data
    ];
  })

;