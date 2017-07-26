angular.module('myApp')

  .service('ESCMTBFriendly', function(){
    return {
      data: 
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
    }
  })