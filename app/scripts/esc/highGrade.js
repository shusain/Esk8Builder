angular.module('myApp')

  .service('ESCHighGrade', function(){
    return {
      data: 
      {
        label:"High Grade, High precision",
        description:
        ` Smooth throttle response, good braking force, lots of options for
          customization`,
        
        components: [
          {
            name:"VESC 4.12",
            description: 
            `Now known depending on who makes it, esk8.de controller, ollin
            esc and so on.`
          },
          {
            name: "FOXBOX",
            description:
            `Formerly known as VESC - X`
          }
        ]
      }
    }
  })