const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  console.log(`I have ${pokemons.length} pokemons!`);
};
// countThem()

const orderThem = () => {
  // order the pokemons alphabetically
  console.log(`${pokemons.sort()}`);
};
// orderThem()

const flipThem = () => {
  // reverse the order of the pokemons
  console.log(`${pokemons.reverse()}`);
};
// flipThem()

const makeThemBig = pokemon => {
  // print the pokemons in UPPERCASE letters
  console.log(pokemon.toUpperCase());
};
// pokemons.forEach(makeThemBig)

const onlyTheBs = pokemons.filter(item => item.startsWith("B"));
// only print the pokemons that starts with B
// console.log(onlyTheBs);

pokemons.forEach(onlyTheBs);

const notTheCs = pokemons.filter(item => !item.startsWith("C"));
// console.log(notTheCs);

// const notTheCs = pokemon => {
//   // remove all pokemons that starts with C
//   if (pokemon.startsWith("C") === false) console.log(pokemon);
// };
// pokemons.forEach(notTheCs)

const nameAndIdThanks = pokemon => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  console.log(`Number ${pokemons.indexOf(pokemon)} - ${pokemon}`);
};
// pokemons.forEach(nameAndIdThanks)

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push("Jigglypuff");
  console.log(pokemons);
};
// catchPokemon()

const didICatchIt = name => {
  if (pokemons.includes(name)) {
    console.log(`Yes, you have caught ${name}`);
  } else {
    console.log(`No, you still have to catch ${name}`);
  }
  // check the pokemons to see if a specific pokemon is in the array
};
didICatchIt("Charizard");
didICatchIt("Snorlax");

const addInThirdPlace = () => {
  pokemons.splice(2, 0, "Clefairy");
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  console.log(pokemons);
};
// addInThirdPlace()

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
};
