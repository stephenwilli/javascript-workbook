'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

/*
* CrewMember Class
* This class creates a CrewMember object on each instantiaion with the following parameters and function:
* @param name: crew member's name
* @param job: crew member's job
* @param specialSkill: crew member's special skill
* @param ship: crew member's current ship
*
* @function enterShip: pushes the crew member into a ship
*
*/

class CrewMember {
  constructor(name, job, specialSkill){
      this.name = name;
      this.job = job;
      this.specialSkill = specialSkill;
      this.ship = null;
  }

  enterShip(shipEntered){
    this.ship = shipEntered;
    shipEntered.crew.push(this);
  }
}

/*
* Ship Class
* This class creates a Ship object on each instantiaion with the following parameters and function:
* @param name: ship's name
* @param type: ship's type
* @param ability: ship's ability
* @param crew: crew member's currently on ship
*
* @function missionStatement: loops through the ships crew to see if a crew members job matches the jobtype
* required for the ship to go on its mission
*
* @return: ship's ability if the correct crew job type is aboard
*/

class Ship {
  constructor(name, type, ability){
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  }

  missionStatement(){

      let i = 0;
      let mission = false;

      // Checks for each crew member aboard for thier job

      while(i < this.crew.length){
        let crewJob = this.crew[i].job;
        // console.log(crewJob);
        if (((jobTypes[crewJob])==(this.type))||(this.crew[i].job=='programmer')){
          mission = true;
        }
        i++
      }

      if (mission == true){
        console.log(this.ability);
      } else {
        console.log("Can't perform a mission yet.");
      }
  }
}

/*
* Test instances
*
*/

let crewPilot = new CrewMember('James Bond', 'programmer', 'badass');
let crewProgrammer = new CrewMember('Michael Douglas', 'pilot', 'sneaky');

let ship1 = new Ship('Rocket', 'MAV', 'fly');
let ship2 = new Ship('Tanker', 'Main Ship', 'haul');

crewPilot.enterShip(ship1);
crewProgrammer.enterShip(ship2);
// console.log(crewPilot);
// console.log(crewProgrammer);

ship1.missionStatement();
ship2.missionStatement();



//tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
