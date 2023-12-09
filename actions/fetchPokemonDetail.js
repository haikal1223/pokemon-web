"use server";

export async function fetchPokemonDetail(name) {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${name}`;

  try {
    const [pokemonResponse, speciesResponse] = await Promise.all([
      fetch(pokemonUrl),
      fetch(speciesUrl),
    ]);

    const pokemonData = await pokemonResponse.json();
    const speciesData = await speciesResponse.json();

    const enhancedPokemon = {
      ...pokemonData,
      ...speciesData,
    };

    return enhancedPokemon;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
