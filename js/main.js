var game;

var firstOptions = {
  type: "WindUpGenerator",
  perSecondModifier: 1,
  cost: 25
};
var secondOptions = {
  type: "SmallSolarPanel",
  perSecondModifier: 4,
  cost: 100
};
var thirdOptions = {
  type: "LargeSolarPanel",
  perSecondModifier: 20,
  cost: 500
};
var fourthOptions = {
  type: "SmallWindTurbine",
  perSecondModifier: 80,
  cost: 2000
};
var fifthOptions = {
  type: "LargeWindTurbine",
  perSecondModifier: 300,
  cost: 7500
};
var sixthOptions = {
  type: "SmallGasBurner",
  perSecondModifier: 780,
  cost: 20000
};
var seventhOptions = {
  type: "LargeGasBurner",
  perSecondModifier: 3900,
  cost: 100000
};
var eighthOptions = {
  type: "SmallFuelCell",
  perSecondModifier: 58500,
  cost: 150000
};
var ninthOptions = {
  type: "LargeFuelCell",
  perSecondModifier: 386100,
  cost: 1000000
};
var tenthOptions = {
  type: "SmallCoalFire",
  perSecondModifier: 962750,
  cost: 2500000
};
var eleventhOptions = {
  type: "LargeCoalFire",
  perSecondModifier: 2888250,
  cost: 7500000
};
var twelthOptions = {
  type: "SmallHydroelectricScheme",
  perSecondModifier: 7509450,
  cost: 20000000
};
var thirteenthOptions = {
  type: "LargeHydroelectricScheme",
  perSecondModifier: 28160437,
  cost: 75000000
};
var fourteenthOptions = {
  type: "SmallBiofuelFire",
  perSecondModifier: 56320874,
  cost: 150000000
};
var fifthteenthOptions = {
  type: "LargeBiofuelFire",
  perSecondModifier: 185858884,
  cost: 500000000
};
var sixteenthOptions = {
  type: "SmallGeothermalPlant",
  perSecondModifier: 557576652,
  cost: 1500000000
};
var seventeenthOptions = {
  type: "LargeGeothermalPlant",
  perSecondModifier: 1840002953,
  cost: 5000000000
};
var eighteenthOptions = {
  type: "SmallNuclearReactor",
  perSecondModifier: 7360011914,
  cost: 20000000000
};
var nineteenthOptions = {
  type: "LargeNuclearReactor",
  perSecondModifier: 27600044677,
  cost: 75000000000
};
var twentiethOptions = {
  type: "ElectricMatterExtractor",
  perSecondModifier: 110400178,
  cost: 300000000000
};
var twentyfirstOptions = {
  type: "SmallSolarFlareFarm",
  perSecondModifier: 364320589743,
  cost: 1000000000000
};
var twentysecondOptions = {
  type: "LargeSolarFlareFarm",
  perSecondModifier: 1092961769229,
  cost: 5000000000000
};
var twentythirdOptions = {
  type: "SmallSolarFlareFarm",
  perSecondModifier: 4371847076816,
  cost: 20000000000000
};
var twentyfourthOptions = {
  type: "LargeStardustHarvester",
  perSecondModifier: 21859235384680,
  cost: 1000000000000000
};
var twentyfifthOptions = {
  type: "SmallElectroMoonHarvester",
  perSecondModifier: 65577706154040,
  cost: 75000000000000000
};
var twentysixthOptions = {
  type: "LargeElectroMoonHarvester",
  perSecondModifier: 196733118462120,
  cost: 200000000000000000
};
var twentyseventhOptions = {
  type: "SmallElectroPlanetHarvester",
  perSecondModifier: 590199355386360,
  cost: 750000000000000000000
};
var twentyeighthOptions = {
  type: "LargeElectroPlanetHarvester",
  perSecondModifier: 1770598066159080,
  cost: 2000000000000000000000
};
var twentyninthOptions = {
  type: "SmallSunHarvester",
  perSecondModifier: 5311794198477240,
  cost: 10000000000000000000000
};
var thirtiethOptions = {
  type: "LargeSunHarvester",
  perSecondModifier: 15935382595431720,
  cost: 50000000000000000000000
};
var thirtyfirstOptions = {
  type: "SmallSuperNovaCollector",
  perSecondModifier: 47806147786295160,
  cost: 500000000000000000000000
};
var thirtysecondOptions = {
  type: "LargeSuperNovaCollector",
  perSecondModifier: 143418443358885480,
  cost: 20000000000000000000000000
};
var thirtythirdOptions = {
  type: "SmallSolarWindTurbine",
  perSecondModifier: 430255330076656440,
  cost: 90000000000000000000000000
};
var thirtyfourthOptions = {
  type: "LargeSolarWindTurbine",
  perSecondModifier: 1290765990229969320,
  cost: 300000000000000000000000000
};
var thirtyfifthOptions = {
  type: "SmallGalaxyHarvester",
  perSecondModifier: 3872297970689907960,
  cost: 10000000000000000000000000000
};
var thirtysixthOptions = {
  type: "LargeGalaxyHarvester",
  perSecondModifier: 11616893912069723880,
  cost: 70000000000000000000000000000
};
var thirtyseventhOptions = {
  type: "SmallGalaxyCollider",
  perSecondModifier: 34850681736209171640,
  cost: 200000000000000000000000000000
};
var thirtyeighthOptions = {
  type: "LargeGalaxyCollider",
  perSecondModifier: 104552045208627514920,
  cost: 750000000000000000000000000000
};
var thirtyninthOptions = {
  type: "SmallProtonEventFarm",
  perSecondModifier: 313656135625882544760,
  cost: 3000000000000000000000000000000
};
var fortiethOptions = {
  type: "LargeProtonEventFarm",
  perSecondModifier: 940968406877647634280,
  cost: 10000000000000000000000000000000
};




function buyHouse(housey) {
  var house = game.getSet("HOUSES").getEntity(housey).attributes; //multiple ways of writing this: game.getSet("HOUSES").getEntities()[housey].attributes; || game.sets.HOUSES.getEntities()[housey].attributes || game.

  if (house.cost <= game.getScore()) {

    game.addToScore(-house.cost); //subtract house cost from the score variable
    game.addToPointsPerSecond(house.perSecondModifier);
    game.addToPointsPerClick(house.perSecondModifier / 2);

    //modify the cost of this house so that it's more expensive to buy
    house.cost += Math.ceil(house.cost / 2); //not we can also do setAttribute


    var countVariableName = "count_" + housey;
    game.setAttribute(countVariableName, game.getAttribute(countVariableName) + 1);


    //game.setAttribute("count
  }

};

var last_update = Date.now();

function init() {

  game = new Game(30); //30 fps game
  game.init(); //binds a clicker element -> useful for games where single-variable clicker games like cookie clicker
  game.addToScore(0); //initialize score to 500
  game.addToPointsPerClick(1); //initialize points received per click to 10

  game.addSet("HOUSES"); //create a game set that stores all the Houses the player can buy

  //add attributes and track the count of each
  game.addAttribute("count_WindUpGenerator", 0, "#count_WindUpGenerator"); //don't use spaces for the id element
  game.addAttribute("count_SmallSolarPanel", 0, "#count_SmallSolarPanel");
  game.addAttribute("count_LargeSolarPanel", 0, "#count_LargeSolarPanel");
  game.addAttribute("count_SmallWindTurbine", 0, "#count_SmallWindTurbine");
  game.addAttribute("count_LargeWindTurbine", 0, "#count_LargeWindTurbine");
  game.addAttribute("count_SmallGasBurner", 0, "#count_SmallGasBurner");
  game.addAttribute("count_LargeGasBurner", 0, "#count_Large_Gas_Burner");
  game.addAttribute("count_SmallFuelCell", 0, "#count_Small_Fuel_Cell");
  game.addAttribute("count_LargeFuelCell", 0, "#count_Large_Fuel_Cell");
  game.addAttribute("count_SmallCoalFire", 0, "#count_Small_Coal_Fire");
  game.addAttribute("count_LargeCoalFire", 0, "#count_Large_Coal_Fire");
  game.addAttribute("count_SmallHydroelectricScheme", 0, "#count_Small_Hydroelectric_Plant");
  game.addAttribute("count_LargeHydroelectricScheme", 0, "#count_Large_Hydroelectric_Plant");
  game.addAttribute("count_SmallBiofuelFire", 0, "#count_SmallBiofuel");
  game.addAttribute("count_LargeBiofuelFire", 0, "#count_LargeBiofuel");
  game.addAttribute("count_SmallGeothermalPlant", 0, "#count_SmallGeothermal");
  game.addAttribute("count_LargeGeothermalPlant", 0, "#count_LargeGeothermal");
  game.addAttribute("count_SmallNuclearReactor", 0, "#count_SmallNuclear");
  game.addAttribute("count_LargeNuclearReactor", 0, "#count_LargeNuclear");



  //add the houses into the HOUSES entity set
  game.sets.HOUSES.addEntity("Wind Up Generator", firstOptions).track("cost", "#house_cost_0");
  game.sets.HOUSES.addEntity("Small Solar Panel", secondOptions).track("cost", "#house_cost_1");
  game.sets.HOUSES.addEntity("Large Solar Panel", thirdOptions).track("cost", "#house_cost_2");
  game.sets.HOUSES.addEntity("Small Wind Turbine", fourthOptions).track("cost", "#house_cost_3");
  game.sets.HOUSES.addEntity("Large Wind Turbine", fifthOptions).track("cost", "#house_cost_4");
  game.sets.HOUSES.addEntity("Small Gas Burner", sixthOptions).track("cost", "#house_cost_5");
  game.sets.HOUSES.addEntity("Large Gas Burner", seventhOptions).track("cost", "#house_cost_6");
  game.sets.HOUSES.addEntity("Small Fuel Cell", eighthOptions).track("cost", "#house_cost_7");
  game.sets.HOUSES.addEntity("Large Fuel Cell", ninthOptions).track("cost", "#house_cost_8");
  game.sets.HOUSES.addEntity("Small Coal Fire", tenthOptions).track("cost", "#house_cost_9");
  game.sets.HOUSES.addEntity("Large Coal Fire", eleventhOptions).track("cost", "#house_cost_10");
  game.sets.HOUSES.addEntity("Small Hydro Scheme", twelthOptions).track("cost", "#house_cost_11");
  game.sets.HOUSES.addEntity("Large Hydro Scheme", thirteenthOptions).track("cost", "#house_cost_12");
  game.sets.HOUSES.addEntity("Small Biofuel Fire", fourteenthOptions).track("cost", "#house_cost_13");
  game.sets.HOUSES.addEntity("Large Biofuel Fire", fifthteenthOptions).track("cost", "#house_cost_14");
  game.sets.HOUSES.addEntity("Small Geothermal Plant", sixteenthOptions).track("cost", "#house_cost_15");
  game.sets.HOUSES.addEntity("Large Geothermal Plant", seventeenthOptions).track("cost", "#house_cost_16");
  game.sets.HOUSES.addEntity("Small Nuclear Reactor", eighteenthOptions).track("cost", "#house_cost_17");
  game.sets.HOUSES.addEntity("Large Nuclear Reactor", nineteenthOptions).track("cost", "#house_cost_18");
  game.sets.HOUSES.addEntity("Electric Matter Extractor", twentiethOptions).track("cost", "#house_cost_19");
  game.sets.HOUSES.addEntity("Small Solar Flare Farm", twentyfirstOptions).track("cost", "#house_cost_20");
  game.sets.HOUSES.addEntity("Large Solar Flare Farm", twentysecondOptions).track("cost", "#house_cost_21");
  game.sets.HOUSES.addEntity("Small Stardust Harvester", twentythirdOptions).track("cost", "#house_cost_22");
  game.sets.HOUSES.addEntity("Large Stardust Harvester", twentyfourthOptions).track("cost", "#house_cost_23");
  game.sets.HOUSES.addEntity("Small Electro Moon Harvester", twentyfifthOptions).track("cost", "#house_cost_24");
  game.sets.HOUSES.addEntity("Large Electro Moon Harvester", twentysixthOptions).track("cost", "#house_cost_25");
  game.sets.HOUSES.addEntity("Small Electro Planet Harvester", twentyseventhOptions).track("cost", "#house_cost_26");
  game.sets.HOUSES.addEntity("Large Electro Planet Harvester", twentyeighthOptions).track("cost", "#house_cost_27");
  game.sets.HOUSES.addEntity("Small Sun Harvester", twentyninthOptions).track("cost", "#house_cost_28");
  game.sets.HOUSES.addEntity("Large Sun Harvester", thirtiethOptions).track("cost", "#house_cost_29");
  game.sets.HOUSES.addEntity("Small Supernova Collector", thirtyfirstOptions).track("cost", "#house_cost_30");
  game.sets.HOUSES.addEntity("Large Supernova Collector", thirtysecondOptions).track("cost", "#house_cost_31");
  game.sets.HOUSES.addEntity("Small Solar Wind Turbine", thirtythirdOptions).track("cost", "#house_cost_32");
  game.sets.HOUSES.addEntity("Large Solar Wind Turbine", thirtyfourthOptions).track("cost", "#house_cost_33");
  game.sets.HOUSES.addEntity("Small Galaxy Harvester", thirtyfifthOptions).track("cost", "#house_cost_34");
  game.sets.HOUSES.addEntity("Large Galaxy Harvester", thirtysixthOptions).track("cost", "#house_cost_35");
  game.sets.HOUSES.addEntity("Small Galaxy Collider", thirtyseventhOptions).track("cost", "#house_cost_36");
  game.sets.HOUSES.addEntity("Large Galaxy Collider", thirtyeighthOptions).track("cost", "#house_cost_37");
  game.sets.HOUSES.addEntity("Small Proton Event Farm", thirtyninthOptions).track("cost", "#house_cost_38");
  game.sets.HOUSES.addEntity("Large Proton Event Farm", fortiethOptions).track("cost", "#house_cost_39");









  //game.getSet("HOUSES").getEntity("Old House").untrack("cost");// --> will stop tracking the cost in real-time.. uncomment to see how!

  //now let's add this list into our html

  houses_list = game.sets.HOUSES.getEntities(); //obtain the set of houses
  var x = 0;
  for (i in houses_list) {
    $("#available_houses").append("<div title='" + houses_list[i].getName() + "&#13;Cost: " + houses_list[i].attributes.cost + "&#13;Joules/Sec: " + houses_list[i].attributes.perSecondModifier + "' jps'class='house' id='" + x + "_house'><b id='thingy' style='text-align:centre'>&nbsp" + houses_list[i].getName() + "</b><br>&nbspCost: <b id='house_cost_" + x + "'>" + houses_list[i].attributes.cost + "</b><br>&nbspJoules/Sec: <b>" + houses_list[i].attributes.perSecondModifier + "<br></b>&nbspJoules/Click: <b><span>" + houses_list[i].attributes.perSecondModifier / 2 + "</span></b><br></b></b><hr>");
    game.addClicker("#" + x + "_house", buyHouse, i);


    x++;

  }



  //game.removeClicker("#0_house"); //works!
  game.play(incrementalGame);


  //play();
};



function incrementalGame() {
  //this function contains our main game loop code



  //our game code
  var comment = ''
  if (game.getScore() >= 1000) var comment = "Enough to power a light bulb for 16 hours";
  else if (game.getScore() >= 10000) var comment = 'a';
  else if (game.getScore() >= 100000) var comment = 'sddsf';
  else if (game.getScore() >= 1000000) var comment = 'sasdaddsf';
  else if (game.getScore() >= 10000000) var comment = "sddsasdasf";
  else if (game.getScore() >= 100000000) var comment = "sddsasf";
  else if (game.getScore() >= 1000000000) var comment = "sddssdf";
  else if (game.getScore() >= 10000000000) var comment = "sddssdf";
  else if (game.getScore() >= 100000000000) var comment = "sddssdf";
  else if (game.getScore() >= 1000000000000) var comment = "sddsfsd";
  else if (game.getScore() >= 10000000000000) var comment = "sddssdf";
  else if (game.getScore() >= 100000000000000) var comment = "sddssdasdsf";

  //display stuff
  $("#money_value").html(game.getScore());
  $("#perSecond").html(game.getPointsPerSecond());
  $("#perClick").html(game.getPointsPerClick());



  //do stuff
  game.increaseScorePerSecond(); //this increases the score per second
  //using game's internal 'score' variable
  /*for (i in Tracks)
  {

  	$(Tracks[i].element).html(Tracks[i].container[Tracks[i].name]);


  }*/

  //tracks are automatically maintained in game.play();

  last_update = Date.now();




}

var ag = new Game();



$(document).ready(function () {

  init(); //run initialization code

});
