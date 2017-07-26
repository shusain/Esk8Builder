angular.module('myApp')

  .service('ESC', function(ESCHighGrade, ESCUsable, ESCMTBFriendly, ESCSharedSpecs){
    return {
      data: 
      {
        label: "Electronic Speed Controller (ESC)",
        description:
        ` The ESC is responsible for taking control input from a receiver and
          controlling the flow of power from the batteries to the coils of the
          motor in order to drive the motor speed.`,
        keySpecs: ESCSharedSpecs,

        subcategories: [
          ESCHighGrade.data,
          
          ESCUsable.data,
          
          ESCMTBFriendly.data
          
        ]
        
        
      }
    }
  })