import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { fetchPokemons } from "@/actions/fetchPokemon";
import LoadMore from "./components/LoadMore";
import PokemonList from "./components/PokemonList";
import Header from "./components/Header";

const HomePage = async () => {
  const pokemons = await fetchPokemons(1);

  return (
    <Box
      sx={{
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(211,209,255,1) 0%, rgba(123,123,237,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          backgroundImage: `url('/static/assets/background/bg-pokeball.jpg')`,
          py: 3,
          boxShadow: " 1px 1px 50px 0px rgba(0,0,0,0.50)",
        }}
      >
        <Header />

        <PokemonList pokemons={pokemons} />
        <LoadMore />
      </Container>
    </Box>
  );
};
export default HomePage;
