function createPlayerCookie(pokemonName, cpuPokemonName) {
  Cookies.set("chosenPokemon", pokemonName);
  Cookies.set("cpuChosenPokemon", cpuPokemonName);
  window.open("/pages/battle.html", "_self");
}

function playerCurrentHealth(cHealth, mHealth) {
  var curHealthValue = (cHealth / mHealth) * 100;
  var curHealthBar = document.getElementById("plyr_current_health");
  curHealthBar.style.width = `${curHealthValue}%`;
  curHealthBar.style.background = "green";
}

// function cpuCurrentHealth(cHealth, mHealth) {
//   var curHealthValue = (cHealth / mHealth) * 100;
//   var curHealthBar = document.getElementById("plyr_current_health");
//   curHealthBar.style.width = `${curHealthValue}%`;
//   curHealthBar.style.background = "green";
// }
