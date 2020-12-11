//Core, driving JS code for the Chrono Randomizer run tracker web app, v1.0. Developed by Froyo101, released 12-5-20.
//This code is licensed under the GNU GPL v3, a copyleft license. All derivative works must be free and open source.
//A copy of this license can be found in the site files under COPYING.txt

//Class for run event/section objects
 class RunEvent {
    constructor(cnd, gls) {
        this.conditions = cnd; //arr of req key items
        this.goals = gls; //arr of actual goals when key items are obtained
        this.completion = false;
    }

    // Gets conditions array
    get eventConditions() {
        return this.conditions;
    }

    set eventConditions(cnd) {
        this.conditions = cnd;
    }

    // Gets formatted goals array
    get formattedGoals() {
      return this.formatGoals();
    }

    // Formats goals in HTML for integration
    formatGoals() {
        let formatted = [];
        for (var i = 0; i < this.goals.length; i++) {
            formatted[i] = `<p class="goal-ic">${this.goals[i]}</p>`;
        }
        return formatted;
    }

    set eventGoals(gls) {
        this.goals = gls;
    }

    get completed() {
        return this.completion;
    }

    set completed(status) {
        this.completion = status;
    } 
}

//The following section instantiates all necessary events
var start = new RunEvent(['Start'], ['Buy at least 10 shelters from start screen, as well as a decent weapon or two if you need to.',
'Go to Proto Dome (2300 AD) to get a Character Recruitment.',
'(Optional) Go to Trann Dome for Vendor Check.',
'(Optional) Go to Dactyl Nest to get a Character Recruitment.'])

var ev1 = new RunEvent(['Sealed Doors'], ['Go to Zeal Palace (12,000 BC)',
    'Charge Pendant at Mammon Machine (Please note, Early Pendant Charge flag does not work in Lost Worlds).',
'Optional: While in Zeal, go to Kajar (12,000 BC) to check both of Nu’s Shops (Talk to him from both Counters).',
'Open Sealed Door in Bangor Dome for High Tier Loot',
'Open Sealed Door in Trann Dome for High Tier Loot',
'Open Sealed Door in Arris Dome for High Tier Loot']);

var ev2 = new RunEvent(['Go Mode: Ocean Palace'], ['Go to Dark Ages (12,000 BC).',
'Go to Kajar (12,000 BC) to check both of Nu’s Shops (Talk to him from both Counters).',
'Go to Zeal Palace, and enter the throne room.',
'Complete Ocean Palace. If you lose to Lavos at the end, you can fight him again through the bucket or Epoch.']);

var ev3 = new RunEvent(['Go Mode: Black Omen'], ['Go to Keeper’s Dome (2300 AD) and talk to the Nu in the back room.',
'Complete Death’s Peak.',
'Complete the newly unlocked Black Omen.',
'Defeat Queen Zeal.',
'Defeat Lavos if Zeal 2 Flag not set.']);

var ev4 = new RunEvent(['Almost Go Mode!'], ['If you feel strong, go to Tyranno Lair (65,000,000 BC). Otherwise, skip and come back.',
	'Complete dungeon and Defeat Black Tyranno.'])

var ev5 = new RunEvent(['Arris Dome'], ['Travel to 2300 AD',
'Go to Arris Dome, Defeat Guardian.',
'Catch the Rat, enter password.',
'(Optional): Open passageway to make Sealed Door faster to get to later. If you have Pendant, enter.',
'Finish Dungeon to get Key Item']);

var ev6 = new RunEvent(['Reptite Lair'], ['Travel to 65,000,000 BC.',
'(Optional) Check Shop in Ioka Hut.',
'Go to Reptite Lair.',
'Grind enemies if too weak to fight Nizbel.',
'Defeat Nizbel to get Key Item.']);

var ev7 = new RunEvent(['Son of Sun'], ['Travel to 2300 AD.',
'If you have Fire Protection or feel prepared, Go to Sun Keep. Otherwise, skip for now.',
'Defeat Son of Sun to get a Key Item.']);

var ev8 = new RunEvent(['Mt. of Woe'], ['Travel to 12,000 BC.',
'(Optional) Check Algetty shopkeeper',
'Defeat Mudbeasts to gain access to Mt. of Woe.',
'(Optional) Fight Rock Enemies for massive amounts of XP and Tech Points',
'Defeat Giga Gaia to get Key Item.']);

var ev9 = new RunEvent(['Geno Dome'], ['Travel to 2300 AD.',
'Complete Geno Dome for a massive amount of XP, Tech Points, and treasure.',
'Defeat Mother Brain to get a Key Item.']);

var ev10 = new RunEvent(['Tyranno Lair'], ['Travel to 65,000,000 BC.',
'Complete Tyranno Lair and Defeat Black Tyranno to get a Key Item and open sealed door in Zeal.']);

var ev11 = new RunEvent(['GG!'], ['You did it! Lavos has been defeated, and the world is saved!']);

var ev12 = new RunEvent(['GG!'], ['You did it! Queen Zeal is dead, and the world is saved!']);	

//A special error event for when no new events are available with the currently selected checkboxes
var evError = new RunEvent(['Error'], ['Unable to load any events. Assuming your run isn\'t finished, please select a checkbox or reload the page.']);

//Core array events are pulled from
var evArr = [start, ev1, ev2, ev3, ev4, ev5, ev6, ev7, ev8, ev9, ev10, ev11, ev12];

//Sets the starting guide as the initial event to load
var activeEvent = evArr[0];

var numPassed = 0;
var eventNumber = 0;

// Wait until DOM is ready to register callbacks ////THIS IS JUST A SAMPLE OF HOW TO LOAD CALLBACKS POSTDOM
$(function () {
    console.log("DOM loaded");

    loadContent(activeEvent);

    $("#skip").click(function() {
        activeEvent.completed = false;
        let oldEvent = activeEvent;
        let status = fetchEvent();
        oldEvent.completed = false;
    });
    
    $("#complete").click(function () {
        eventNumber = 0;
        activeEvent.completed = true;
        let status = fetchEvent();
    });
 });

 //Displays selected event in eventContent div
 function loadContent(curEvent) {
     let content = $("#eventContent");
     content.empty();

     let heading = '<h3>';
     let cnd = curEvent.eventConditions;
     for (let i = 0; i < cnd.length; i++) {
        heading += cnd[i];

        if (!(i == cnd.length - 1)) {
            heading += ', ';
        }
     }
     heading += '</h3>';

     content.append(heading);

     let goals = curEvent.formattedGoals;
     for (let j = 0; j < goals.length; j++) {
         content.append(goals[j]);
     }

     activeEvent = curEvent;

     //Allows double clicking on goals to mark them as completed (they turn green)
     $("p").dblclick(function(){
        $(this).toggleClass("goal-ic");
        $(this).toggleClass("goal-c");
    });
 }

 //Checks all completion statuses and item conditions to find next event
function fetchEvent() {
    if (evArr[2].completed) {
        loadContent(evArr[11])
        return true;
    }
    if (evArr[3].completed) {
        loadContent(evArr[12])
        return true;
    }
    if (evArr[4].completed) {
	document.getElementById("BlackTyrannoDefeated").checked = true;
    }
     while (numPassed < 2) {
         switch (eventNumber) {
             case 0:
                 eventNumber++;
                 if (!evArr[0].completed) {
                     loadContent(evArr[0]);
                     return true;
                 }
                 break;
            case 1:
			     eventNumber++;
                 if (!evArr[1].completed && checkBox("pendant")) {
                     loadContent(evArr[1]);
                     return true;
                 }
				 break;
			case 2:     
				 eventNumber++;
                 if (!evArr[2].completed && checkBox("rubyKnife") && checkBox("BlackTyrannoDefeated")) {
                     loadContent(evArr[2]);
                     return true;
                 }	
				 break;
            case 3:
			     eventNumber++;
                 if (!evArr[3].completed && checkBox("clone") && checkBox("chronoTrigger")) {
                         loadContent(evArr[3]);
                         return true;
                     }
				 break;					 
			case 4:
                 eventNumber++;
                 if (!evArr[4].completed && checkBox("rubyKnife") && checkBox("dreamstone") && !checkBox("BlackTyrannoDefeated")) {
                     loadContent(evArr[4]);
                     return true;
                 }
                 break;
            case 5:
                 eventNumber++;
                 if (!evArr[5].completed) {
                     loadContent(evArr[5]);
                     return true;
                 }	
				 break;
			case 6:
                  eventNumber++;
                 if (!evArr[6].completed) {
                     loadContent(evArr[6]);
                     return true;
                 }			 
			case 7:
                  eventNumber++;
                 if (!evArr[7].completed) {
                     loadContent(evArr[7]);
                     return true;
				 } 
			case 8:
                  eventNumber++;
                 if (!evArr[8].completed) {
                     loadContent(evArr[8]);
                     return true;
				 }					 
			case 9:
                  eventNumber++;
                 if (!evArr[9].completed) {
                     loadContent(evArr[9]);
                     return true;
				 }					 
			case 10:
                 eventNumber++;
                 if (!evArr[10].completed && checkBox("dreamstone") && !checkBox("BlackTyrannoDefeated")) {
                     loadContent(evArr[10]);
                     return true;
                 }
                 break;

            

             default:
                 loadContent(evError);
                 return false;
         }
    }
    if (numPassed >= 2) {
        loadContent(evError);
        numPassed = 0;
        return false;
    }
 }

 //Compares event conditions to see if they match (checks if an individual checkbox is checked)
 function checkBox(boxID) {
    let box = $("#" + boxID);
    if (box.prop("checked") == true) {
        return true;
    }
    else {
        return false;
     }
}