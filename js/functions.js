// Uses the cookie for player selection to find the object for Users pokemon from pokemon.js
function getPokemonObject() {
  var currentPokemon = Cookies.get("chosenPokemon").toLowerCase();
  return pokemonList[currentPokemon];
}

// Uses the cookie for CPU selection to find the object for CPU's pokemon from pokemon.js
function getCpuPokemonObject() {
  var cpuPokemon = Cookies.get("cpuChosenPokemon").toLowerCase();
  return cpuPokemonList[cpuPokemon];
}
// Function to set the cookies for player pokemon and cpu pokemon using arguments, this is used in the onclick attribute in html.
// Also sets variables to the player and CPU objects created above.
// Sets health cookies for both players to max, ensures a new game.
// Opens battle page in the same tab.
function createGame(pokemonName, cpuPokemonName) {
  Cookies.set("chosenPokemon", pokemonName);
  Cookies.set("cpuChosenPokemon", cpuPokemonName);
  Cookies.set("gameOver", "");

  var currentPokemon = getPokemonObject();
  var cpuPokemon = getCpuPokemonObject();

  Cookies.set("plyrCurrentHealth", currentPokemon.max_health);
  Cookies.set("cpuCurrentHealth", cpuPokemon.max_health);

  window.open("/pages/battle.html", "_self");
}

// 2 functions to create player and cpu health bars by doing simple math, and changing the width attribute to the value with %;
function playerHealthBar(cHealth, mHealth) {
  var curHealthValue = (cHealth / mHealth) * 100;
  var curHealthBar = document.getElementById("plyr_current_health");
  curHealthBar.style.width = `${curHealthValue}%`;
  curHealthBar.style.background = "green";
}

function cpuHealthBar(cHealth, mHealth) {
  var cpuCurHealthValue = (cHealth / mHealth) * 100;
  var cpuCurHealthBar = document.getElementById("cpu_current_health");
  cpuCurHealthBar.style.width = `${cpuCurHealthValue}%`;
  cpuCurHealthBar.style.background = "green";
}

// This is the logic for the CPU attack.

function cpuAttack() {
  // sets variables to the player and CPU objects created above(. May be able to refactor this as it is something I do a few different times)
  var currentPokemon = getPokemonObject();
  var cpuPokemon = getCpuPokemonObject();
  var cpuAbilityChoice;
  var message = document.getElementById("messages_container");
  // Getting length of the abilities object. Legth = how many key's are direct children of the abilities object.
  // forIn loop to get down another level in the object from pokemon.js, sets ability keys to var ability so we can get inside that object, loops through them.
  cpuChoice = Object.keys(cpuPokemon.abilities).length;

  for (var ability in cpuPokemon.abilities) {
    // math rolls for each object, first to roll < 1 / (number of abilities) wins. If none win, choose last ability.

    if (Math.random() < 1 / cpuChoice) {
      cpuAbilityChoice = cpuPokemon.abilities[ability];
      break;
    }
  }
  if (cpuAbilityChoice === undefined) {
    cpuAbilityChoice = cpuPokemon.abilities[ability];
  }
  // If statement to compare health to the cpu's upcoming ability damage, if its > the damage, update player health variable. Can't go below 1 health this way.
  if (playerHealth > cpuAbilityChoice.damage) {
    playerHealth -= cpuAbilityChoice.damage;
    // update health value.
    playerPokemonHealth.innerHTML = `${playerHealth}`;
    // update action section for attack.
    message.innerText = `Enemy ${cpuPokemon.name}'s ${cpuAbilityChoice.name} did ${cpuAbilityChoice.damage} damage to ${currentPokemon.name}`;
    // if player health is instead less than or = to upcoming ability damage, set player health variable to 0.
  } else if (playerHealth <= cpuAbilityChoice.damage) {
    playerHealth = 0;

    gameOver = Cookies.set("gameOver", "Player Wins!");
    playerPokemonHealth.innerHTML = `${playerHealth}`;
    // this stops the game as gameOver = false, needs to be true to run.

    // update action section for attack and faint.
    message.innerText = `Enemy ${cpuPokemon.name}'s ${cpuAbilityChoice.name} did ${cpuAbilityChoice.damage} damage to your ${currentPokemon.name}. \n Your ${currentPokemon.name} has fainted`;
  }
  // update player health bar.
  playerHealthBar(playerHealth, currentPokemon.max_health);
  // update cookie.
  Cookies.set("plyrCurrentHealth", playerHealth);
}

// This is the logic for the Player attack.
// Argument passed by playgame function thats running in the onclick attribute on each button.
function playerAttack(playerAbility) {
  // sets variables to the player and CPU objects created above(. May be able to refactor this as it is something I do a few different times)
  var currentPokemon = getPokemonObject();
  var cpuPokemon = getCpuPokemonObject();
  var message = document.getElementById("messages_container");
  // sets variable to be the ability chosen, using the argument from above and onclick from the button.
  var chosenAbility = currentPokemon.abilities[playerAbility];
  // set's variable to CPU health cookie
  // var cpuHealth = Cookies.get("cpuCurrentHealth");

  // same logic as above, but for the user attack.
  if (cpuHealth > chosenAbility.damage) {
    cpuHealth -= chosenAbility.damage;
    cpuPokemonHealth.innerHTML = `${cpuHealth}`;
    message.innerText = `${currentPokemon.name}'s ${chosenAbility.name} did ${chosenAbility.damage} damage to ${cpuPokemon.name}`;
  } else if (cpuHealth <= chosenAbility.damage && gameOver === false) {
    cpuHealth = 0;
    cpuPokemonHealth.innerHTML = `${cpuHealth}`;
    gameOver = Cookies.set("gameOver", "Player Wins!");
    message.innerText = `${currentPokemon.name}'s ${chosenAbility.name} did ${chosenAbility.damage} damage to ${cpuPokemon.name}. \n ${cpuPokemon.name} has fainted`;
  }
  cpuHealthBar(cpuHealth, cpuPokemon.max_health);
  Cookies.set("cpuCurrentHealth", cpuHealth);
}

// function redirect() {
//   var playerSelection = getPokemonObject();

// }

// Clear Cookies if game is over
function clearCookie() {
  if (gameOver === true) {
    Cookies.remove("plyrCurrentHealth");
    Cookies.remove("cpuCurrentHealth");
  }
  // redirect();
}

// Function to start a game. setTimeout to 4 seconds so that there's a delay between the Player, and cpu attacks, this alsodelays the message that
// we display to the user, for a better user experience.
function playGame(playerAbility) {
  if (gameOver === false) {
    playerAttack(playerAbility);
    setTimeout(function () {
      cpuAttack();
    }, 1000);
  }
}
