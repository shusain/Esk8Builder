angular.module('myApp')

  .service('PowerAndDriveTrain', function(Motors, MotorMounts){
    var service = {

      data: {
        label:"Power/Drive Train",
        description: `The power train and drive train include all the components
                      used to turn the wheels including the motor, belts, pulleys
                      and any other connecting parts involved in transferring energy
                      from the moving parts to the ground.`,
        subcategories: [
          Motors.data,
          MotorMounts.data,
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