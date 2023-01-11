const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));

  return pokemonsArr.map((value, index) => index + 1);
};

const getPokemonsOptions = () => {
  const mixedPokemonts = getPokemons().sort(() => Math.random() - 0.5);
  getPokemonsNames(mixedPokemonts.splice(0, 4));
};

const getPokemonsNames = ([a, b, c, d] = []) => {
  console.log(a, b, c, d);
};

export default getPokemonsOptions;
