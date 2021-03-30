// declares a variable for the main section to create all our html in.
var pokemonOptions = document.getElementById("pokemon_options");

// declaring an undefined variable here and updating it with finctions, makes cpuPokemonSelection available to the global scope.
var cpuPokemonSelection;

// Storing length(number of direct children keys (which are also objects)) of cpuPokemonList in in pokemon.js
var numberCpu = Object.keys(cpuPokemonList).length;
// forIn loop game that chooses a pokemon based on FIRST to roll a low number (1 divided by the number of keys(objects) within cpuPokemonList).
// This is not lowest number wins. (something to look into?)
for (var pokemon in cpuPokemonList) {
  if (Math.random() < 1 / numberCpu) {
    cpuPokemonSelection = cpuPokemonList[pokemon].name;
    break;
  }
}

// dafault to last pokemon if no pokemon wins game in if statment.
if (cpuPokemonSelection === undefined) {
  cpuPokemonSelection = cpuPokemonList[pokemon].name;
}

// forIn loop that sets the direct children keys(objects) of pokemonList (these are the users pokemon) to the pokemon variable.
// Then creates all of the HTML dynamically based on how many pokemon (keys)objects their are directly inside pokemonList.
for (var pokemon in pokemonList) {
  var createArticle = document.createElement("article");
  // creates the article from the above line and sets the id of to the "name" key within each pokemon in the pokemonList object.
  createArticle.setAttribute("id", `${pokemonList[pokemon].name}`);
  createArticle.setAttribute("class", "pokemon");
  // sets the onclick attribute to to use the createGame function from functions.js. Arguments from here are passed to that function.
  // this gets the clicked pokemon dynamically.
  createArticle.setAttribute(
    "onclick",
    `createGame('${pokemonList[pokemon].name}', '${cpuPokemonSelection}')`
  );

  var createImg = document.createElement("img");
  createImg.setAttribute("class", "pokemon_image");
  // sets src attribute dynamically from the "image" key in each pokemon object.
  createImg.setAttribute("src", `${pokemonList[pokemon].image}`);
  // dynamically sets the alt attribute of each pokemon gif.
  createImg.setAttribute(
    "alt",
    `animated image of ${pokemonList[pokemon].name}`
  );
  var createH3 = document.createElement("h3");
  createH3.setAttribute("class", "pokemon_name");
  // variable declaration that dynamically creates a text node with each pokemon's name.
  var pokemonTxtName = document.createTextNode(`${pokemonList[pokemon].name}`);

  // appends an article for each pokemon in the list using the variable set on line 2 to store the container element.
  pokemonOptions.appendChild(createArticle);

  // Targets each individal article using the [pokemon] variable and targetting the "name" key(object) and appends the image in it using the
  // createImg variable we created above.
  document
    .getElementById(`${pokemonList[pokemon].name}`)
    .appendChild(createImg);

  // Same thing as above, except appnds our H3 from the "createH3" we created above.
  document.getElementById(`${pokemonList[pokemon].name}`).appendChild(createH3);
  // Appends the Text node we stored in a variable above to the H3 to display the pokemons name.
  createH3.appendChild(pokemonTxtName);
}
