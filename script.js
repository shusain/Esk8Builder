// Code goes here

angular.module('myApp', [])

  .controller("MyCtrl", function(){
    var ctrl = this;
    
    ctrl.categories = [
      {
        label:"Power/Drive Train",
        description: "The power train and drive train include all the components used to turn the wheels including the motor, belts, pulleys and any other connecting parts involved in transferring energy from the moving parts to the ground.",
        subcategories: [
          { 
            label: "Motor",
            description: "Brushless DC Motors are the primary source of converting electrical power into kinect energy.  Coils of wire in the stator have current flowing through them which creates a rotating magnetic field which carries the rotor along with it.",
            keySpecs: ["Max Amperage", "KV", "Watts", "Max Voltage", "Diameter"],
            components: [
              {
                name: "Turnigy SK3 6374",
                kv: 149
              }
            ]
          },
          {
            label: "Motor Mount",
            description: "The motor mount clamps onto the trucks and holds the motor parallel to the trucks.  Mount materials, designs, and clamping mechanisms vary from vendor to vendor, but all essentially hold the motor a fixed distance and angle relative to the trucks."
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
      },
      {
        label:"Battery Power",
        description: "Batteries are the primary power source for esk8 boards.  Currently the best available power density batteries are Lithium Polymer (LiPo) packs commonly used in hobby RC (cars, planes, boats, etc.)  Lithium Polymer packs have the disadvantage of being soft packs that can be easily punctured or deformed from pressure or impacts so they must be well protected.  If the outer protective 'foil' is punctured or lithium in the cells builds up in the electrolyte it will create an internal short and cause thermal runaway (sometimes resulting in a high energy fire as the Lithium reacts with air and water and releases a large amount of energy as heat in the process) https://cameochemicals.noaa.gov/chemical/999",
        subcategories: [
          { 
            label: "Lithium Polymer (LiPo)",
            components: []
          },
          { 
            label: "Lithium Iron Polymer (LiFePo)",
            components: []
          },
          { 
            label: "Lithium Ion (LiIon 18650 Cells)",
            components: []
          },
          { 
            label: "Lithium Iron (LiFe 18650 Cells)",
            components: []
          }
        ],
      },
      {
        label: "Loop Keys and Power Switches"
      },
      {
        label: "Battery Chargers/Management"
      },
      {
        label: "Electronic Speed Controller (ESC)",
        description: "The ESC is responsible for taking control input from a receiver and controlling the flow of power from the batteries to the coils of the motor in order to drive the motor speed.",
        subcategories: [
          {
            label:"High Grade, High precision",
            description: "Smooth throttle response, good braking force, lots of options for customization",
            components: [
              {
                name:"VESC 4.12",
                description: "Now known depending on who makes it, esk8.de controller, ollin esc and so on."
              },
              {
                name: "FOXBOX",
                description: "Formerly known as VESC - X"
              }
            ]
          },
          
          {
            label:"Usable or managable",
            description: "ESC's suited for other industries primarly but still decent enough for esk8 purposes",
            components: [
              {
                name:"FVT 120 6s",
                description: "(or now known depending on who makes it, esk8.de controller, ollin esc and so on)"
              },
              {
                name: "Hobbyking XCar Beast 150",
                description: "I know people have been using it, @lowGuido might have a feedback / review about it, otherwise sounds like sturdy esc with decent performance"
              }
            ]
          },
          
          {
            label:"Mountainboard (MTB) Friendly",
            description: "ESCs suited for Mountainboard (Emtb) use / build",
            components: [
              {
                name:"FVT 120 12S",
                description: "Looks promising so far, @Idea has spent a lot of time dealing with it, powerful, might need the right configuration / version to run properly - with brakes and good throttle/brake curves, @laurnts might know better about the existing versions"
              },
              {
                name: "Roxxy 12S",
                description: "Extensively used my @Nowind, Powerful, good quality, high end esc"
              }
            ]
          }
        ]
        
        
      },
      {
        label: "Controller or Transmitter and Receiver"
      },
      {
        label: "Enclosures"
      },
      {
        label: "Wiring and connectors"
      },
      {
        label: "Lights, telemetry, extra electronics"
      },
      {
        label: "Decks"
      },
      {
        label: "Wheels"
      },
      {
        label: "Risers"
      }
    ];
  })

;



// Power/Drive Train
  // Motor
  // Motor mount
  // Pulleys for motor and wheel
  // Belt
  // Hub Motors
// Battery Power
  // Battery form factors/chemistry
    // LiPo/18650
    // Li-Ion variations like LiFePo
    // Lead-acid (Pb), NiMH
// Practical understanding of, voltage, amperage, resistance, power loss, and amp hours.
// Loop keys and power switches
// Battery Chargers/Management
// Electronic Speed Controller
  // VESC
  // X-Car Beast
  // other
// Controller or Transmitter and Receiver
// Wiring and connectors
// Lights, telemetry, extra electronics
// Enclosures
// Decks
// Trucks
// Wheels
// Risers