export const fetchPokemonInfo = async (id: number) => {
  if (id) {
    return (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json();
  }
};
