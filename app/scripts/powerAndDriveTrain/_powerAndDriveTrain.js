angular.module('myApp')

  .service('PowerAndDriveTrain', function(Motors){
    var service = {

      data: {
        label:"Power/Drive Train",
        description: `The power train and drive train include all the components
                      used to turn the wheels including the motor, belts, pulleys
                      and any other connecting parts involved in transferring energy
                      from the moving parts to the ground.`,
        subcategories: [
          Motors.data,
          {
            label: "Motor Mount",
            description: `The motor mount clamps onto the trucks and holds the motor
                          parallel to the trucks.  Mount materials, designs, and clamping
                          mechanisms vary from vendor to vendor, but all essentially hold
                          the motor a fixed distance and angle relative to the trucks.`
          },
          {
            label: "Pulleys"
          },
          {
            label: "Belts"
          },
          {
            label: "Hub Motors"
          },
        ],
      }

    };

      return service;
  })