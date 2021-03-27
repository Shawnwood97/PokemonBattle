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

function playerAttack(ability) {
  var currentPokemon = getPokemonObject();
  var cpuPokemon = getCpuPokemonObject();

  var chosenAbility = currentPokemon.abilities[ability];
  var cpuHealth = Cookies.get("cpuCurrentHealth");
  if (cpuHealth > chosenAbility.damage) {
    cpuHealth -= chosenAbility.damage;
  } else {
    cpuHealth = 0;
  }
  cpuHealthBar(cpuHealth, cpuPokemon.max_health);
  Cookies.set("cpuCurrentHealth", cpuHealth);
}
