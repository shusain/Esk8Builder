angular.module("myApp",[]).controller("MyCtrl",["PowerAndDriveTrain","Batteries","LoopKeyOrSwitches","BatteryChargers","ESC","ControllerAndReceiver","Enclosures","WiringAndConnectors","OtherElectronics","Decks","Wheels","Risers",function(e,t,r,n,o,a,i,s,l,c,u,d){this.categories=[e.data,t.data,r.data,n.data,o.data,a.data,i.data,s.data,l.data,c.data,u.data,d.data]}]),angular.module("myApp").service("Motors",function(){return{data:{label:"Motor",description:"Brushless DC Motors are the primary source of converting electrical power into kinect energy.\n                      Coils of wire in the stator have current flowing through them which creates a rotating magnetic\n                      field which carries the rotor along with it.",keySpecs:["Max Amperage","KV","Watts","Max Voltage","Diameter"],components:[{name:"Turnigy SK3 6374",KV:149}]}}}),angular.module("myApp").service("MotorMounts",function(){return{data:{label:"Motor Mount",description:"The motor mount clamps onto the trucks and holds the motor\n                      parallel to the trucks.  Mount materials, designs, and clamping\n                      mechanisms vary from vendor to vendor, but all essentially hold\n                      the motor a fixed distance and angle relative to the trucks.",keySpecs:["Length","Width","Height","Supported Motor Diameter"]}}}),angular.module("myApp").service("PowerAndDriveTrain",["Motors","MotorMounts",function(e,t){return{data:{label:"Power/Drive Train",description:"The power train and drive train include all the components\n                      used to turn the wheels including the motor, belts, pulleys\n                      and any other connecting parts involved in transferring energy\n                      from the moving parts to the ground.",subcategories:[e.data,t.data,{label:"Pulleys"},{label:"Belts"},{label:"Hub Motors"}]}}}]),angular.module("myApp").service("Batteries",["LiPo","LiFePo",function(e,t){return{data:{label:"Battery Power",description:"Batteries are the primary power source for esk8 boards.\n                      Currently the best available power density batteries are\n                      Lithium Polymer (LiPo) packs commonly used in hobby RC\n                      (cars, planes, boats, etc.)  Lithium Polymer packs have\n                      the disadvantage of being soft packs that can be easily\n                      punctured or deformed from pressure or impacts so they\n                      must be well protected.  If the outer protective 'foil'\n                      is punctured or lithium in the cells builds up in the\n                      electrolyte it will create an internal short and cause\n                      thermal runaway (sometimes resulting in a high energy\n                      fire as the Lithium reacts with air and water and releases\n                      a large amount of energy as heat in the process)\n                      https://cameochemicals.noaa.gov/chemical/999",subcategories:[e.data,t.data,{label:"Lithium Ion (LiIon 18650 Cells)",components:[]},{label:"Lithium Iron (LiFe 18650 Cells)",components:[]}]}}}]),angular.module("myApp").service("LiPo",function(){return{data:{label:"Lithium Polymer (LiPo)",description:"Lithium Polymer batteries or LiPo for short are some of the most\n              commonly used batteries in RC vehicles.",components:[]}}}),angular.module("myApp").service("LiFePo",function(){return{data:{label:"Lithium Iron Polymer (LiFePo)",components:[]}}}),angular.module("myApp").service("LoopKeyOrSwitches",function(){return{data:{label:"Loop Keys and Power Switches"}}}),angular.module("myApp").service("BatteryChargers",function(){return{data:{label:"Battery Chargers/Management"}}}),angular.module("myApp").service("ESC",["ESCHighGrade","ESCUsable","ESCMTBFriendly","ESCSharedSpecs",function(e,t,r,n){return{data:{label:"Electronic Speed Controller (ESC)",description:" The ESC is responsible for taking control input from a receiver and\n          controlling the flow of power from the batteries to the coils of the\n          motor in order to drive the motor speed.",keySpecs:n,subcategories:[e.data,t.data,r.data]}}}]),angular.module("myApp").service("ESCMTBFriendly",function(){return{data:{label:"Mountainboard (MTB) Friendly",description:"ESCs suited for Mountainboard (Emtb) use / build",components:[{name:"FVT 120 12S",description:" Looks promising so far, @Idea has spent a lot of time dealing\n              with it, powerful, might need the right configuration / version\n              to run properly - with brakes and good throttle/brake curves,\n              @laurnts might know better about the existing versions"},{name:"Roxxy 12S",description:" Extensively used my @Nowind, Powerful, good quality, high end\n              esc"}]}}}),angular.module("myApp").service("ESCHighGrade",function(){return{data:{label:"High Grade, High precision",description:" Smooth throttle response, good braking force, lots of options for\n          customization",components:[{name:"VESC 4.12",description:"Now known depending on who makes it, esk8.de controller, ollin\n            esc and so on."},{name:"FOXBOX",description:"Formerly known as VESC - X"}]}}}),angular.module("myApp").service("ESCUsable",function(){return{data:{label:"Usable or managable",description:" ESC's suited for other industries primarly but still decent enough\n          for esk8 purposes",components:[{name:"FVT 120 6s",description:" Or now known depending on who makes it, esk8.de controller,\n              ollin esc and so on."},{name:"Hobbyking XCar Beast 150",description:" People have been using it, @lowGuido might have a\n              feedback / review about it, otherwise sounds like sturdy esc\n              with decent performance"}]}}}),angular.module("myApp").value("ESCSharedSpecs",["Amperage(max)","Voltage(ideal)","Ease of Configuration"]),angular.module("myApp").service("ControllerAndReceiver",function(){return{data:{label:"Controller or Transmitter and Receiver"}}}),angular.module("myApp").service("Enclosures",function(){return{data:{label:"Enclosures"}}}),angular.module("myApp").service("WiringAndConnectors",function(){return{data:{label:"Wiring and connectors"}}}),angular.module("myApp").service("OtherElectronics",function(){return{data:{label:"Lights, telemetry, extra electronics"}}}),angular.module("myApp").service("Decks",function(){return{data:{label:"Decks"}}}),angular.module("myApp").service("Wheels",function(){return{data:{label:"Wheels"}}}),angular.module("myApp").service("Risers",function(){return{data:{label:"Risers"}}});