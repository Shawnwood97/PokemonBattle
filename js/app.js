// declares a variable for the main section to create all our html in.
var pokemonOptions = document.getElementById("pokemon_options");

var cpuPokemonSelection;

// console.log(cpuPokemonSelection);

// for loop that creates and  appends all of the HTML, in a kinda Dry way.
var numberCpu = Object.keys(cpuPokemonList).length;
for (var pokemon in cpuPokemonList) {
  // var coinFlip = Math.random();
  // console.log(coinFlip);
  if (Math.random() < 1 / numberCpu) {
    cpuPokemonSelection = cpuPokemonList[pokemon].name;
    break;
  }
}

// dafault to last pokemon if noone wins game in if statment.
if (cpuPokemonSelection === undefined) {
  cpuPokemonSelection = cpuPokemonList[pokemon].name;
}

for (var pokemon in pokemonList) {
  var createArticle = document.createElement("article");
  createArticle.setAttribute("id", `${pokemonList[pokemon].name}`);
  createArticle.setAttribute("class", "pokemon");
  createArticle.setAttribute(
    "onclick",
    `createPlayerCookie('${pokemonList[pokemon].name}', '${cpuPokemonSelection}')`
  );
  var createImg = document.createElement("img");
  createImg.setAttribute("class", "pokemon_image");
  createImg.setAttribute("src", `${pokemonList[pokemon].image}`);
  createImg.setAttribute(
    "alt",
    `animated image of ${pokemonList[pokemon].name}`
  );
  var createH3 = document.createElement("h3");
  createH3.setAttribute("class", "pokemon_name");
  var pokemonTxtName = document.createTextNode(`${pokemonList[pokemon].name}`);

  pokemonOptions.appendChild(createArticle);
  document
    .getElementById(`${pokemonList[pokemon].name}`)
    .appendChild(createImg);
  document.getElementById(`${pokemonList[pokemon].name}`).appendChild(createH3);
  createH3.appendChild(pokemonTxtName);
}
