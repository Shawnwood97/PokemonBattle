// Stores cookies in variables.
var playerSelection = Cookies.get("chosenPokemon");
var playerHealth = Cookies.get("plyrCurrentHealth");
var cpuSelection = Cookies.get("cpuChosenPokemon");
var cpuHealth = Cookies.get("cpuCurrentHealth");

// Dynamically sets the title of the page based on the pokwemon names stored in the cookies.
document.title = `${playerSelection} Vs. ${cpuSelection}`;

// stores element creation methods for the player in variables.
var playerPokemonImg = document.getElementById("player_image");
var playerPokemonName = document.getElementById("player_name");
var playerPokemonHealth = document.getElementById("plyr_current_health");

// stores element creation methods for the cpu in variables.
var cpuPokemonImg = document.getElementById("cpu_image");
var cpuPokemonName = document.getElementById("cpu_name");
var cpuPokemonHealth = document.getElementById("cpu_current_health");

// Storing the selected pokemon object that matches the cookie in lowercase to the below variables.
// lowercase because the cookie is Capitalized, but in order for it to ref the objects from pokemon.js, we need lowercase.
var currentPokemon = pokemonList[playerSelection.toLowerCase()];
var cpuCurrentPokemon = cpuPokemonList[cpuSelection.toLowerCase()];

// variable for ending the game. gameOver = false; means that the game is still going..... thinkkk about it :).
var gameOver = false;

// Injects html Dynamically based on cookies and above variables. This is why we needed variables with lowercase values.
playerPokemonName.innerHTML = `${currentPokemon.name}`;
playerPokemonImg.innerHTML = `<img src='${currentPokemon.image}'>`;
playerPokemonHealth.innerHTML = `${playerHealth}`;

cpuPokemonName.innerHTML = `${cpuCurrentPokemon.name}`;
cpuPokemonImg.innerHTML = `<img src='${cpuCurrentPokemon.image}'>`;
cpuPokemonHealth.innerHTML = `${cpuHealth}`;

// This ensures the health bar updates when the page is loaded, rather than just on click. Otherwise on refresh and game start, health bars would not show full health visually.
playerHealthBar(playerHealth, currentPokemon.max_health);
cpuHealthBar(cpuHealth, cpuCurrentPokemon.max_health);

if (
  playerSelection === undefined ||
  playerHealth === undefined ||
  cpuHealth === undefined
) {
  var popupDisplay = document.getElementById("pop_up");
  popupDisplay.style.display = "grid";
  setTimeout(function () {
    window.open("/index.html", "_self");
  }, 6000);
}

// UNUSED VATRIABLES, might want later
// var playerPokemonMHealth = document.getElementById("plyr_max_health");
// var cpuPokemonMHealth = document.getElementById("cpu_max_health");
