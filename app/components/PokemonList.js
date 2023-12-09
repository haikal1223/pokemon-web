"use client";

import React, { Children } from "react";
import PokemonCard from "./PokemonCard";
import { Grid } from "@mui/material";

const PokemonList = ({ pokemons }) => {
  return (
    <Grid container mt={1} spacing={2}>
      {Children.toArray(
        pokemons?.map((pokemon) => {
          return (
            <Grid item xs={6}>
              <PokemonCard
                name={pokemon?.name}
                pokemonColor={pokemon?.color}
                image={pokemon?.image}
                pokemonTypes={pokemon?.types}
              />
            </Grid>
          );
        })
      )}
    </Grid>
  );
};

export default PokemonList;
