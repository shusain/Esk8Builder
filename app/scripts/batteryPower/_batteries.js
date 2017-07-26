angular.module('myApp')

  .service('Batteries', function(LiPo,LiFePo){
    return {
      data: {
        label:"Battery Power",
        description: `Batteries are the primary power source for esk8 boards.
                      Currently the best available power density batteries are
                      Lithium Polymer (LiPo) packs commonly used in hobby RC
                      (cars, planes, boats, etc.)  Lithium Polymer packs have
                      the disadvantage of being soft packs that can be easily
                      punctured or deformed from pressure or impacts so they
                      must be well protected.  If the outer protective 'foil'
                      is punctured or lithium in the cells builds up in the
                      electrolyte it will create an internal short and cause
                      thermal runaway (sometimes resulting in a high energy
                      fire as the Lithium reacts with air and water and releases
                      a large amount of energy as heat in the process)
                      https://cameochemicals.noaa.gov/chemical/999`,
        subcategories: [
          LiPo.data,
          LiFePo.data,
          { 
            label: "Lithium Ion (LiIon 18650 Cells)",
            components: []
          },
          { 
            label: "Lithium Iron (LiFe 18650 Cells)",
            components: []
          }
        ],
      }
    }
  })