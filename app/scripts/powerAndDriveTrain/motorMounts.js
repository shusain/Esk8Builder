angular.module('myApp')

  .service('MotorMounts', function(){
    return {
      data: {
        label: "Motor Mount",
        description: `The motor mount clamps onto the trucks and holds the motor
                      parallel to the trucks.  Mount materials, designs, and clamping
                      mechanisms vary from vendor to vendor, but all essentially hold
                      the motor a fixed distance and angle relative to the trucks.`,
        keySpecs: ["Length","Width","Height","Supported Motor Diameter"]
      }
    }
  })