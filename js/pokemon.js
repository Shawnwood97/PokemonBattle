var pokemonList = {
  charmander: {
    name: "Charmander",
    image: "/images/charmander.gif",
    cur_health: 500,
    max_health: 1000,
    strength: "grass",
    weakness: "water",
    abilities: [
      {
        name: "Ember",
        type: "fire",
        damage: 100,
      },
      {
        name: "Smokey",
        type: "fire",
        damage: 300,
      },
      {
        name: "Flamethrower",
        type: "fire",
        damage: 500,
      },
    ],
  },
  squirtle: {
    name: "Squirtle",
    image: "/images/squirtle.gif",
    cur_health: 800,
    max_health: 1100,
    strength: "fire",
    weakness: "grass",
    abilities: [
      {
        name: "Water gun",
        type: "water",
        damage: 200,
      },
      {
        name: "Water pulse",
        type: "water",
        damage: 100,
      },
      {
        name: "Surf",
        type: "water",
        damage: 650,
      },
    ],
  },
  bulbasaur: {
    name: "Bulbasaur",
    image: "/images/bulbasaur.gif",
    cur_health: 1200,
    max_health: 1200,
    strength: "water",
    weakness: "fire",
    abilities: [
      {
        name: "Grass1",
        type: "grass",
        damage: 220,
      },
      {
        name: "Vine Whip",
        type: "grass",
        damage: 110,
      },
      {
        name: "Grass3",
        type: "grass",
        damage: 620,
      },
    ],
  },
};

var cpuPokemonList = {
  charmander: {
    name: "Charmander",
    image: "/images/charmander.gif",
    cur_health: 500,
    max_health: 1000,
    strength: "grass",
    weakness: "water",
    abilities: [
      {
        name: "Ember",
        type: "fire",
        damage: 100,
      },
      {
        name: "Smokey",
        type: "fire",
        damage: 300,
      },
      {
        name: "Flamethrower",
        type: "fire",
        damage: 500,
      },
    ],
  },
  squirtle: {
    name: "Squirtle",
    image: "/images/squirtle.gif",
    cur_health: 800,
    max_health: 1100,
    strength: "fire",
    weakness: "grass",
    abilities: [
      {
        name: "Water gun",
        type: "water",
        damage: 200,
      },
      {
        name: "Water pulse",
        type: "water",
        damage: 100,
      },
      {
        name: "Surf",
        type: "water",
        damage: 650,
      },
    ],
  },
  bulbasaur: {
    name: "Bulbasaur",
    image: "/images/bulbasaur.gif",
    cur_health: 1200,
    max_health: 1200,
    strength: "water",
    weakness: "fire",
    abilities: [
      {
        name: "Grass1",
        type: "grass",
        damage: 220,
      },
      {
        name: "Vine Whip",
        type: "grass",
        damage: 110,
      },
      {
        name: "Grass3",
        type: "grass",
        damage: 620,
      },
    ],
  },
};

export { pokemonList, cpuPokemonList };
