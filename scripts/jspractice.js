var startStory = function () {
        "use strict";
        window.alert("The cool wet pitter patter of rain drops wakes you. You look around and and realize you are in the ruins of an old town. There's no sign of life...\nYou suddendly remember who you are and what your purpose is!");
    
        function randomNumber(i) {
            return Math.round(Math.random() * (i - 1));
        }
    
        var characterName =  window.prompt("You remember that your name is"),
            characterClassChoice = window.prompt("You are a:\n barbarian \n mage \n rogue hunter").toLowerCase(),
            weapons = ["rock and bashed", "rusty pitchfork and stabbed", "shard of glass and slashed"],
            randomWeapon = weapons[randomNumber(weapons.length)],
            character = {
                health: 10,
                strength: 0,
                dexterity: 0,
                intellect: 0,
                name: characterName,
                characterClass: characterClassChoice
            };
    
   
        switch (characterClassChoice) {
        case "barbarian":
            window.alert("You are a barbarian. You have a strength bonus and you are more effective with melee weapons.");
            break;
        case "mage":
            window.alert("You are a mage. You have an intellect bonus and you are more effective with arcane science");
            break;
        case "rogue hunter":
            window.alert("You are a rogue hunter. You have a dexterity bonus and you are more effective with ranged weapons.");
            break;
        default:
            window.alert("Please enter valid answer.");
        }
        window.alert("You hear a noise behind you. You notice, what you thought was a corpse hanging from a post, moving and wiggling to loosen the chains that bind it. ");
        window.alert("You are startled and fall backwards. Without thinking you quickly feel around in the mud for something to use as a weapon. you found a " + randomWeapon + " the unnatural being!");
    };



document.getElementById("beginButton").addEventListener("click", startStory, false);





































