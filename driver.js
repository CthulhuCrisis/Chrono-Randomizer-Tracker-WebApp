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
var start = new RunEvent(['Start'], ['Change Battle speed and Memory Cursor (If Desired).',
'Go to Market (600 AD) in Porre, get tab and check store inventory.',
'Travel to 1000 AD. Check Key Item from Snail Stop(1000 AD). Remember this.',
'Go to West Cape (1000 AD), get tab from behind grave.',
'Talk to Carpenter at the Chorus Inn (1000 AD). Check shopkeeper here, then get Key Item from Carpenter’s Wife.',
'Go to the Market Fight in Medina Village (1000 AD), Get tabs from Residence here as well. If you lose a character or are not strong enough to do this, fight the first encounter in Magic Cave (1000 AD)',
'(Optional) Check Melchior’s shop at his home (1000 AD) if needed.',
'(You ideally have 10-30 mid tonics, 20-40 ethers, 2-5 shelters, 2-5 revives, and about 20 heals) If not: Check Millennial Fair (1000 AD) shops for ethers, weapons, or other items if needed.',
'Travel to 600 AD, Talk to Knight Captain on Zenan Bridge.',
'Complete Cathedral (600 AD).',
'Return to Guardia Castle (600 AD) to get a Character Recruitment.',
'Talk to Chef downstairs and Clear Zenan Bridge (600 AD) for a Key Item.',
'Complete Denadoro Mountains (600 AD) for a Key Item.',
'Complete Heckran Cave (1000 AD) for a Key Item, XP, and a lot of Tech Points.']);

var ev1 = new RunEvent(['Clone', 'Chrono Trigger', 'Future'], ['Go to Keeper’s Dome (2300 AD) and talk to the Nu in the back room.',
'Complete Death’s Peak.',
'Complete the newly unlocked Black Omen.',
'Defeat Lavos. (THE END)']);

var ev2 = new RunEvent(['Ruby Knife', 'Dark Ages'], ['Go to Dark Ages (12,000 BC).',
'[Optional] Complete Mt. Woe for XP, Techpoints, Gear and a key item.***',
'Go to Kajar (12,000 BC) to check Nu’s Shop.',
'Go to Zeal Palace, and enter the throne room.',
'Complete Ocean Palace. If you lose to Lavos at the end, you can fight him again through the bucket or Epoch. (THE END)']);

var ev3 = new RunEvent(['Gate Key'], ['Go to the Residence with the Wardrobe in Medina Village (1000 AD) to access Prehistory.',
'Go back into the timegate immediately to unlock Magic.**',
'Go to Dactyl Nest (65,000,000 BC) to get a Character Recruitment.',
'Go beat Reptite Lair (65,000,000 BC) for a Key Item.']);

var ev4 = new RunEvent(['Pendant'], ['Go to Guardia Castle (1000 AD). Talk to the Lawyer to go complete Prison (1000 AD) to unlock Future.',
'Have Magic?** If No, go complete Factory (2300 AD), then go to Proto Dome to get a character Recruitment, then to the timegate in the back room to get Magic. Then continue.',
'Go complete Arris Dome (2300 AD) for a key Item.',
'Go to the Sun Palace (2300 AD), beat Son of Sun for a Key Item.',
'Go complete Geno Dome (2300 AD) for a Key Item and lots of Treasure.']);

var ev5 = new RunEvent(['Gate Key', 'Dreamstone'], ['Go to the Residence with the Wardrobe in Medina Village (1000 AD) to access Prehistory.',
'Go back into the timegate immediately to unlock Magic.**',
'Go to Dactyl Nest to get a Character Recruitment.',
'Have Ruby Knife? If no, go beat Reptite Lair (65,000,000 BC) for a Key Item.',
'Go to Tyranno Lair (65,000,000 BC) to unlock Dark Age.']);

var ev6 = new RunEvent(['Bent Sword', 'Bent Hilt', 'Frog'], ['Go to Melchior’s House (1000 AD) and reforge the Masamune.',
'Return to Frog’s House (600 AD) and get a Character Recruitment.',
'Take Frog to Magic Cave (600 AD), and complete Magus’ Castle to unlock Dark Age.']);

var ev7 = new RunEvent(['Magic', 'Magus'], ['Complete Heckran Cave (1000 AD) for a Key Item, XP, and a lot of Tech Points.']);

var ev8 = new RunEvent(['Hero\'s Medal'], ['Go to Frog’s Home (600 AD). open the chest on the left for a key item.',
'Take note of which character is in Frog’s House.']);

var ev9 = new RunEvent(['Bent Sword', 'Bent Hilt'], ['Go to Melchior’s House (1000 AD) and reforge the Masamune.',
'Return to Frog’s House (600 AD) and get a Character Recruitment.',
'If Frog, Take Frog to Magic Cave (600 AD), and complete Magus\' Castle to unlock Dark Age',
'If not, skip.']);

var ev10 = new RunEvent(['Robo'], ['Defeat the Sunken Desert (600 AD).',
'Speak to Fiona with Robo, and let him help her replant the forest.',
'Go to the Forest Cathedral (1000 AD) to get a Key Item.']);

var ev11 = new RunEvent(['Prism Shard', 'Marle'], ['Go to Guardia Castle (600 AD) and speak with the King.',
'Go to Guardia Castle (1000 AD) with Marle. Go to the courtroom down the stairs on the right side of the castle.',
'Go to the basement to the Rainbow Shell to get a key item.',
'Go back to the courtroom, talk to the guards, and beat Yakra.']);

var ev12 = new RunEvent(['Tomas Pop'], ['Go to the Grave west of Chorus (1000 AD) and pour Toma’s Pop on the Grave. This unlocks Giant’s Claw (600 AD) just northwest of Chorus.',
'Complete Giants Claw, interact with the Rainbow Shell to get a Key Item.']);

var ev13 = new RunEvent(['Dark Age', 'No Ruby Knife'], ['Complete Mt. Woe for XP, Techpoints, Gear and a key item.***']);

var ev14 = new RunEvent(['Jerky', 'Prism Shard', 'Moon Stone', 'Marle', 'Future', 'Prehistory'], ['Place Moon Stone in the Sun Keep (65,000,000).',
'Go to Elder’s House in Porre. Give the Jerky for free to the Mom.',
'Go to Mayor’s Manor (1000 AD) and get the Moon Stone back. Place it back in the Sun Keep (1000 AD).',
'Go to Sun Keep (2300 AD) to get the Charged Sunstone.',
'Talk to Taban (1000 AD)',
'Take it to Guardia Castle (1000 AD), give it to Melchior in the basement to get a new Key Item.']);

//A special error event for when no new events are available with the currently selected checkboxes
var evError = new RunEvent(['Error'], ['Unable to load any events. Assuming your run isn\'t finished, please select a checkbox or reload the page.']);

//Core array events are pulled from
var evArr = [start, ev1, ev2, ev3, ev4, ev5, ev6, ev8, ev9, ev10, ev11, ev12, ev13, ev14];

//Sets the starting guide as the initial event to load
var activeEvent = evArr[0];

// Wait until DOM is ready to register callbacks ////THIS IS JUST A SAMPLE OF HOW TO LOAD CALLBACKS POSTDOM
$(function() {
    console.log("DOM loaded");

    loadContent(activeEvent);

    $("#skip").click(function() {
        activeEvent.completed = true;
        let oldEvent = activeEvent;
        let status = fetchEvent();
        oldEvent.completed = false;
    });
    
    $("#complete").click(function() {
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
    if (!evArr[1].completed && checkBox("clone") && checkBox("chronoTrigger") && checkBox("future")) {
        loadContent(evArr[1]);
        return true;
    }
    else if (!evArr[2].completed && checkBox("rubyKnife") && checkBox("darkAges")) {
        loadContent(evArr[2]);
        return true;
    }
    else if (!evArr[3].completed && checkBox("gateKey")) {
        loadContent(evArr[3]);
        return true;
    }
    else if (!evArr[4].completed && checkBox("pendant")) {
        loadContent(evArr[4]);
        return true;
    }
    else if (!evArr[5].completed && checkBox("gateKey") && checkBox("dreamstone")) {
        loadContent(evArr[5]);
        return true;
    }
    else if (!evArr[6].completed && checkBox("bentSword") && checkBox("bentHilt") && checkBox("frog")) {
       loadContent(evArr[6]);
       return true;
   }
   else if (!evArr[7].completed && checkBox("heroMedal")) {
       loadContent(evArr[7]);
       return true;
   }
   else if (!evArr[8].completed && checkBox("bentSword") && checkBox("bentHilt")) {
       loadContent(evArr[8]);
       return true;
   }
   else if (!evArr[9].completed && checkBox("robo")) {
       loadContent(evArr[9]);
       return true;
   }
   else if (!evArr[10].completed && checkBox("prismShard") && checkBox("marle")) {
       loadContent(evArr[10]);
       return true;
   }
   else if (!evArr[11].completed && checkBox("tomaPop")) {
       loadContent(evArr[11]);
       return true;
   }
   else if (!evArr[12].completed && checkBox("darkAges") && !checkBox("rubyKnife")) {
       loadContent(evArr[12]);
       return true;
   }
   else if (!evArr[13].completed && checkBox("jerky") && checkBox("prismShard") && checkBox("moonStone") && checkBox("marle") && checkBox("future") && checkBox("prehistory")) {
       loadContent(evArr[13]);
       return true;
   }
   
   loadContent(evError);
   return false;
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