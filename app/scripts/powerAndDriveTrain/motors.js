angular.module('myApp')

  .service('Motors', function(){
    return {
      data: {
        label: "Motor",
        description: `Brushless DC Motors are the primary source of converting electrical power into kinect energy.
                      Coils of wire in the stator have current flowing through them which creates a rotating magnetic
                      field which carries the rotor along with it.`,
        keySpecs: ["Max Amperage", "KV", "Watts", "Max Voltage", "Diameter"],
        components: [
          {
            name: "Turnigy SK3 6374",
            KV: 149
          }
        ]
      }
    }
  })