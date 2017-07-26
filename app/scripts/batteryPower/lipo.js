angular.module('myApp')

  .service('LiPo', function(){
    return {
      data: 
          { 
            label: "Lithium Polymer (LiPo)",
            description:
              `Lithium Polymer batteries or LiPo for short are some of the most
              commonly used batteries in RC vehicles.`,
            components: []
          }
    }
  })