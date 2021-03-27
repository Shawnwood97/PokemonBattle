import { pokemonList, cpuPokemonList } from "/js/pokemon.js";

// console.log(cpuSelection);
// Player
var playerSelection = Cookies.get("chosenPokemon");
var cpuSelection = Cookies.get("cpuChosenPokemon");
console.log(cpuSelection);
// console.log(cpuSelection);

var playerChosenPokemon = document.getElementById("player_image");
var playerChosenPokemonName = document.getElementById("player_name");
// var playerChosenPokemonMHealth = document.getElementById("plyr_max_health");
var playerChosenPokemonCHealth = document.getElementById("plyr_current_health");
playerChosenPokemon.innerHTML = playerSelection;
// CPU
var cpuChosenPokemon = document.getElementById("cpu_image");
var cpuChosenPokemonName = document.getElementById("cpu_name");
// var cpuChosenPokemonMHealth = document.getElementById("cpu_max_health");
var cpuChosenPokemonCHealth = document.getElementById("cpu_current_health");

// var cpuCurrentPokemon;
// for (var i = 0; i < cpuPokemonList.length; i++) {
//   if (cpuSelection === cpuPokemonList[i].name) {
//     cpuCurrentPokemon = cpuPokemonList[i];

//     cpuChosenPokemonName.innerHTML = `${cpuCurrentPokemon.name}`;
//     cpuChosenPokemon.innerHTML = `<img src='${cpuCurrentPokemon.image}'>`;
//     cpuChosenPokemonCHealth.innerHTML = `${cpuCurrentPokemon.cur_health}`;
//   }
// }

// var currentPokemon;
// for (var i = 0; i < pokemonList.length; i++) {
//   if (playerSelection === pokemonList[i].name) {
//     currentPokemon = pokemonList[i];
//     playerChosenPokemonName.innerHTML = `${currentPokemon.name}`;
//     playerChosenPokemon.innerHTML = `<img src='${currentPokemon.image}'>`;
//     playerChosenPokemonCHealth.innerHTML = `${currentPokemon.cur_health}`;
//     // playerChosenPokemonMHealth.innerHTML = `${pokemonList[i].max_health}`;
//   }
// }

var currentPokemon = pokemonList[playerSelection.toLowerCase()];
playerChosenPokemonName.innerHTML = `${currentPokemon.name}`;
playerChosenPokemon.innerHTML = `<img src='${currentPokemon.image}'>`;
playerChosenPokemonCHealth.innerHTML = `${currentPokemon.cur_health}`;

playerCurrentHealth(currentPokemon.cur_health, currentPokemon.max_health);
//

var cpuCurrentPokemon = cpuPokemonList[cpuSelection.toLowerCase()];

cpuChosenPokemonName.innerHTML = `${cpuCurrentPokemon.name}`;
cpuChosenPokemon.innerHTML = `<img src='${cpuCurrentPokemon.image}'>`;
cpuChosenPokemonCHealth.innerHTML = `${cpuCurrentPokemon.cur_health}`;
