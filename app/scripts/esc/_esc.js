angular.module('myApp')

  .service('ESC', function(){
    return {
      data: 
      {
        label: "Electronic Speed Controller (ESC)",
        description:
        ` The ESC is responsible for taking control input from a receiver and
          controlling the flow of power from the batteries to the coils of the
          motor in order to drive the motor speed.`,
        
        subcategories: [
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
          },
          
          {
            label:"Usable or managable",
            
            description:
            ` ESC's suited for other industries primarly but still decent enough
              for esk8 purposes`,
            
            components: [
              {
                name:"FVT 120 6s",
                description:
                ` Or now known depending on who makes it, esk8.de controller,
                  ollin esc and so on.`
              },
              {
                name: "Hobbyking XCar Beast 150",
                description:
                ` People have been using it, @lowGuido might have a
                  feedback / review about it, otherwise sounds like sturdy esc
                  with decent performance`
              }
            ]
          },
          
          {
            label:"Mountainboard (MTB) Friendly",
            
            description: "ESCs suited for Mountainboard (Emtb) use / build",
            
            components: [
              {
                name:"FVT 120 12S",
                
                description: 
                ` Looks promising so far, @Idea has spent a lot of time dealing
                  with it, powerful, might need the right configuration / version
                  to run properly - with brakes and good throttle/brake curves,
                  @laurnts might know better about the existing versions`
              },
              {
                name: "Roxxy 12S",
                
                description:
                ` Extensively used my @Nowind, Powerful, good quality, high end
                  esc`
              }
            ]
          }
        ]
        
        
      }
    }
  })