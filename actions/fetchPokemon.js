"use server";

export async function fetchPokemons(page) {
  const perPage = 14;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${
    (page - 1) * perPage
  }`;

  try {
    const response = await fetch(apiUrl, { next: { revalidate: 10 } });
    const data = await response.json();

    const pokemon = await Promise.all(
      data.results.map(async (val) => {
        const result = await fetch(val.url, { next: { revalidate: 10 } });
        const pokemonData = await result.json();

        // Make a second fetch call to get species data
        const fetchSpecies = await fetch(pokemonData.species.url, {
          next: { revalidate: 10 },
        });
        const speciesData = await fetchSpecies.json();

        // Get the official artwork URL
        const officialArtworkUrl =
          pokemonData.sprites.other["official-artwork"].front_default;

        // Extract names from the "types" array (limit to 2 names)
        const typeNames = pokemonData.types
          .slice(0, 2)
          .map((type) => type.type.name);

        // Combine pokemonData, color, and image URL into a new object
        const enhancedPokemon = {
          ...pokemonData,
          color: speciesData.color.name,
          image: officialArtworkUrl,
          types: typeNames,
        };

        return enhancedPokemon;
      })
    );

    return pokemon;
  } catch (error) {
    console.log("Error fetching data: ", error);
  }
}
