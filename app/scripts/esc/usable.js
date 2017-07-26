angular.module('myApp')

  .service('ESCUsable', function(){
    return {
      data: 
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
      }
    }
  })