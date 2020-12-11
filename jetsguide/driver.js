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
    '(Optional) Travel to 600 AD, Talk to Knight Captain on Zenan Bridge.']);

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
    'If you need to unlock Magic: Go back into the timegate immediately.',
    '(Optional) Go to Dactyl Nest (65,000,000 BC) to get a Character Recruitment.',
    'Go beat Reptite Lair (65,000,000 BC) for a Key Item.']);

var ev4 = new RunEvent(['Pendant'], ['Go to Guardia Castle (1000 AD). Talk to the Lawyer to go complete Prison (1000 AD) to unlock Future.',
    'If Early Pendant, go in every sealed door during next few steps.',
    'Have Magic? If No, go to the timegate in the back room of Proto Dome to get Magic. Then continue.',
    'Go complete Arris Dome (2300 AD) for a key Item.',
    'Go to the Sun Palace (2300 AD), beat Son of Sun for a Key Item.',
    'Go complete Geno Dome (2300 AD) for a Key Item and lots of Treasure.']);

var ev5 = new RunEvent(['No Requirements - Cathedral'], ['Complete Cathedral (600 AD).',
    'Return to Guardia Castle (600 AD) to get a Character Recruitment.']);

var ev6 = new RunEvent(['No Requirements - Zenan Bridge'], ['Travel to 600 AD, Talk to Knight Captain on Zenan Bridge.',
    'Talk to Chef downstairs in Guardia Castle (600 AD) and Clear Zenan Bridge (600 AD) for a Key Item.']);

var ev7 = new RunEvent(['No Requirements - Denadoro Mountains'], ['Complete Denadoro Mountains (600 AD) for a Key Item.',]);

var ev8 = new RunEvent(['No Requirements - Heckran'], ['Complete Heckran Cave (1000 AD) for a Key Item, XP, and a lot of Tech Points.']);


var ev9 = new RunEvent(['Gate Key', 'Dreamstone'], ['Go to the Residence with the Wardrobe in Medina Village (1000 AD) to access Prehistory.',
    'If you need to unlock Magic: Go back into the timegate immediately.',
    '(Optional) Go to Dactyl Nest to get a Character Recruitment.',
    'Have Ruby Knife? If no, go beat Reptite Lair (65,000,000 BC) for a Key Item.',
    'Go to Tyranno Lair (65,000,000 BC) to unlock Dark Age.']);

var ev10 = new RunEvent(['Bent Sword', 'Bent Hilt', 'Frog'], ['Go to Melchior’s House (1000 AD) and reforge the Masamune.',
    'Optional: Talk to Taban (1000 AD) to get a High Tier Drop.',
	'Return to Frog’s House (600 AD) and get a Character Recruitment.',
    'Take Frog to Magic Cave (600 AD), and complete Magus’ Castle to unlock Dark Age.']);

var ev11 = new RunEvent(['Hero\'s Medal'], ['Go to Frog’s Home (600 AD). open the chest on the left for a key item.',
    'Take note of which character is in Frog’s House.']);

var ev12 = new RunEvent(['Robo'], ['Defeat the Sunken Desert (600 AD).',
    'Speak to Fiona with Robo, and let him help her replant the forest.',
    'Go to the Forest Cathedral (1000 AD) to get a Key Item.']);

var ev13 = new RunEvent(['Prism Shard', 'Marle'], ['Go to Guardia Castle (600 AD) and speak with the King.',
    'Go to Guardia Castle (1000 AD) with Marle. Go to the courtroom up the stairs on the right side of the castle.',
    'Go to the basement to the Rainbow Shell to get a key item.',
    'Go back to the courtroom, talk to the guards, and beat Yakra.']);

var ev14 = new RunEvent(['Toma\'s Pop'], ['Go to the Grave west of Chorus (1000 AD) and pour Toma’s Pop on the Grave. This unlocks Giant’s Claw (600 AD) just northwest of Chorus.',
    'Complete Giants Claw, interact with the Rainbow Shell to get a Key Item.']);

var ev15 = new RunEvent(['Dark Age', 'No Ruby Knife'], ['Complete Mt. Woe for XP, Techpoints, Gear and a key item.***']);

var ev16 = new RunEvent(['Prism Shard', 'Moon Stone', 'Marle', 'Future', 'Prehistory'], ['Place Moon Stone in the Sun Keep (65,000,000).',
    'Go to Sun Keep (65,000,000) and leave the Moon Stone.',
    'Go to Sun Keep (2300 AD) to get the Charged Sunstone.',
    '(Optional) Talk to Taban (1000 AD) to get a High Tier Drop.',
    'Take it to Guardia Castle (1000 AD), give it to Melchior in the basement to get a new Key Item.']);


var ev17 = new RunEvent(['Bent Sword', 'Bent Hilt'], ['Go to Melchior’s House (1000 AD) and reforge the Masamune.',
    'Optional: Talk to Taban (1000 AD) to get a High Tier Drop.',
	'Return to Frog’s House (600 AD) and get a Character Recruitment.']);

var ev18 = new RunEvent(['Future'], ['Go to Proto Dome (2300 AD) for a Character Recruitment.']);

var ev19 = new RunEvent(['Prehistory'], ['Complete the Dactyl Nest (65,000,000 BC) for a Character Recruitment.']);

var ev20 = new RunEvent(['Jerky'], ['Go to Elders House (600 AD) and give Jerky to his wife.', 
'Travel to 1000 AD, collect High Tier Drop from Mayor.']);

var ev21 = new RunEvent(['GG!'], ['You did it! Lavos has been defeated, and the world is saved!']);

var ev22 = new RunEvent(['GG!'], ['You did it! Queen Zeal is dead, and the world is saved!']);

//A special error event for when no new events are available with the currently selected checkboxes
var evError = new RunEvent(['Error'], ['Unable to load any events. Assuming your run isn\'t finished, please select a checkbox or reload the page.']);

//Core array events are pulled from
var evArr = [start, ev1, ev2, ev3, ev4, ev5, ev6, ev7, ev8, ev9, ev10, ev11, ev12, ev13, ev14, ev15, ev16, ev17, ev18, ev19, ev20, ev21, ev22,];

//Sets the starting guide as the initial event to load
var activeEvent = evArr[0];

var numPassed = 0;
var eventNumber = 0;

var darkModeOn = true;

// Wait until DOM is ready to register callbacks ////THIS IS JUST A SAMPLE OF HOW TO LOAD CALLBACKS POSTDOM
$(function () {
    console.log("DOM loaded");

    loadContent(activeEvent);

    $("#skip").click(function () {
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

    $("#darkmode").click(function () {
        if (darkModeOn) {
            document.getElementById("mainbox").classList.remove("content-darkmode");
            document.getElementById("mainbox").classList.add("content");
            document.getElementById("top").classList.remove("top-darkmode");
            document.body.classList.toggle("body-darkmode");
            darkModeOn = false;
        }
        else {
            document.getElementById("mainbox").classList.remove("content");
            document.getElementById("mainbox").classList.add("content-darkmode");
            document.getElementById("top").classList.add("top-darkmode");
            document.body.classList.toggle("body-darkmode");
            darkModeOn = true;
        }
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
    $("p").dblclick(function () {
        $(this).toggleClass("goal-ic");
        $(this).toggleClass("goal-c");
    });
}

//Checks all completion statuses and item conditions to find next event
function fetchEvent() {
    if (evArr[1].completed) {
        loadContent(evArr[22])
        return true;
    }
    if (evArr[2].completed) {
        loadContent(evArr[21])
        return true;
    }
    if (evArr[3].completed)
        document.getElementById("prehistory").checked = true
    if (evArr[4].completed)
        document.getElementById("future").checked = true;
    if (evArr[9].completed) {
        document.getElementById("prehistory").checked = true;
        document.getElementById("darkAges").checked = true;
    }
    if (evArr[10].completed)
        document.getElementById("darkAges").checked = true;
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
                if (!evArr[1].completed && checkBox("clone") && checkBox("chronoTrigger") && checkBox("future")) {
                    loadContent(evArr[1]);
                    return true;
                }
                break;
            case 2:
                eventNumber++;
                if (!evArr[2].completed && checkBox("rubyKnife") && checkBox("darkAges")) {
                    loadContent(evArr[2]);
                    return true;
                }
                break;
            case 3:
                eventNumber++;
                if (!evArr[3].completed && checkBox("gateKey") && !checkBox("dreamstone")) {
                    loadContent(evArr[3]);
                    return true;
                }
                break;
            case 4:
                eventNumber++;
                if (!evArr[4].completed && checkBox("pendant")) {
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
                break;
            case 7:
                eventNumber++;
                if (!evArr[7].completed) {
                    loadContent(evArr[7]);
                    return true;
                }
                break;
            case 8:
                eventNumber++;
                if (!evArr[8].completed) {
                    loadContent(evArr[8]);
                    return true;
                }
                break;
            case 9:
                eventNumber++;
                if (!evArr[9].completed && checkBox("gateKey") && checkBox("dreamstone")) {
                    loadContent(evArr[9]);
                    return true;
                }
                break;
            case 10:
                eventNumber++;
                if (!evArr[10].completed && checkBox("bentSword") && checkBox("bentHilt") && checkBox("frog")) {
                    loadContent(evArr[10]);
                    return true;
                }
                break;
            case 11:
                eventNumber++;
                if (!evArr[11].completed && checkBox("heroMedal")) {
                    loadContent(evArr[11]);
                    return true;
                }
                break;
            case 12:
                eventNumber++;
                if (!evArr[12].completed && checkBox("robo")) {
                    loadContent(evArr[12]);
                    return true;
                }
                break;
            case 13:
                eventNumber++;
                if (!evArr[13].completed && checkBox("prismShard") && checkBox("marle")) {
                    loadContent(evArr[13]);
                    return true;
                }
                break;
            case 14:
                eventNumber++;
                if (!evArr[14].completed && checkBox("tomaPop")) {
                    loadContent(evArr[14]);
                    return true;
                }
                break;
            case 15:
                eventNumber++;
                if (!evArr[15].completed && checkBox("darkAges") && !checkBox("rubyKnife")) {
                    loadContent(evArr[15]);
                    return true;
                }
                break;
            case 16:
                eventNumber++;
                if (!evArr[16].completed && checkBox("jerky") && checkBox("prismShard") && checkBox("moonStone") && checkBox("marle") && checkBox("future") && checkBox("prehistory")) {
                    loadContent(evArr[16]);
                    return true;
                }
                break;
            case 17:
                eventNumber++;
                if (!evArr[17].completed && checkBox("bentSword") && checkBox("bentHilt")) {
                    loadContent(evArr[17]);
                    return true;
                }
                break;
            case 18:
                eventNumber++;
                if (!evArr[18].completed && checkBox("future")) {
                    loadContent(evArr[18]);
                    return true;
                }
                break;
            case 19:
                eventNumber++;
                if (!evArr[19].completed && checkBox("prehistory")) {
                    loadContent(evArr[19]);
                    return true;
                }
				case 20:
                eventNumber = 0;
                if (!evArr[20].completed && checkBox("jerky")) {
                    loadContent(evArr[20]);
                    return true;
                }
                numPassed++;
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