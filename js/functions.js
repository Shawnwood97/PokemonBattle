function getPokemonObject() {
  var currentPokemon = Cookies.get("chosenPokemon").toLowerCase();
  return pokemonList[currentPokemon];
}

function getCpuPokemonObject() {
  var cpuPokemon = Cookies.get("cpuChosenPokemon").toLowerCase();
  return cpuPokemonList[cpuPokemon];
}

function createPlayerCookie(pokemonName, cpuPokemonName) {
  Cookies.set("chosenPokemon", pokemonName);
  Cookies.set("cpuChosenPokemon", cpuPokemonName);

  var currentPokemon = getPokemonObject();
  var cpuPokemon = getCpuPokemonObject();

  Cookies.set("plyrCurrentHealth", currentPokemon.max_health);
  Cookies.set("cpuCurrentHealth", cpuPokemon.max_health);

  window.open("/pages/battle.html", "_self");
}

function playerHealthBar(cHealth, mHealth) {
  var curHealthValue = (cHealth / mHealth) * 100;
  var curHealthBar = document.getElementById("plyr_current_health");
  curHealthBar.style.width = `${curHealthValue}%`;
  curHealthBar.style.background = "green";
}

function cpuHealthBar(cHealth, mHealth) {
  var curHealthValue = (cHealth / mHealth) * 100;
  var curHealthBar = document.getElementById("cpu_current_health");
  curHealthBar.style.width = `${curHealthValue}%`;
  curHealthBar.style.background = "green";
}

function cpuAttack() {
  var cpuAbilityChoice;
  var cpuPokemon = getCpuPokemonObject();
  cpuChoice = Object.keys(cpuPokemon.abilities).length;
  for (var ability in cpuPokemon.abilities) {
    if (Math.random() < 1 / cpuChoice) {
      cpuAbilityChoice = cpuPokemon.abilities[ability].name;
      break;
    }
  }
  if (cpuAbilityChoice === undefined) {
    cpuAbilityChoice = cpuPokemon.abilities[ability].name;
  }
  console.log(cpuAbilityChoice);
}

function playerAttack(ability) {
  if (!gameOver) {
    var currentPokemon = getPokemonObject();
    var cpuPokemon = getCpuPokemonObject();
    var message = document.getElementById("messages_container");
    var chosenAbility = currentPokemon.abilities[ability];
    var cpuHealth = Cookies.get("cpuCurrentHealth");
    if (cpuHealth > chosenAbility.damage) {
      cpuHealth -= chosenAbility.damage;
      message.innerText = `${currentPokemon.name}'s ${chosenAbility.name} did ${chosenAbility.damage} damage to ${cpuPokemon.name}`;
    } else if (cpuHealth <= chosenAbility.damage) {
      cpuHealth = 0;
      gameOver = true;
      message.innerText = `${currentPokemon.name}'s ${chosenAbility.name} did ${chosenAbility.damage} damage to ${cpuPokemon.name}. \n ${cpuPokemon.name} has fainted`;
    }

    cpuHealthBar(cpuHealth, cpuPokemon.max_health);
    Cookies.set("cpuCurrentHealth", cpuHealth);
  }
}
