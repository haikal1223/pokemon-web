import { fetchPokemonDetail } from "@/actions/fetchPokemonDetail";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import PokemonDetail from "./components/PokemonDetail";
import PokemonList from "@/app/components/PokemonList";
import { fetchPokemons } from "@/actions/fetchPokemon";
import LoadMore from "@/app/components/LoadMore";
import Header from "@/app/components/Header";

const Detail = async ({ params }) => {
  const pokemons = await fetchPokemons(1);

  const pokemonDetail = await fetchPokemonDetail(params.name);

  const officalArtworkImage =
    pokemonDetail.sprites.other["official-artwork"].front_default;

  const formattedName =
    params.name.charAt(0).toUpperCase() + params.name.slice(1);

  const isColorContrasting = () => {
    const nonContrastingColors = ["yellow", "white"];
    return nonContrastingColors.includes(pokemonDetail.color.name);
  };

  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(0deg, rgba(211,209,255,1) 0%, rgba(123,123,237,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{ bgcolor: pokemonDetail.color.name, overflow: "hidden" }}
      >
        <Header />
        <Box pt={3} position="relative">
          <Typography
            fontSize={32}
            color={isColorContrasting() ? "black" : "white"}
            fontWeight={500}
          >
            {formattedName}
          </Typography>

          <Stack flexDirection="row">
            {pokemonDetail.types.map((type) => (
              <Typography
                key={type.slot}
                sx={{
                  color: isColorContrasting() ? "black" : "white",
                  fontSize: "12px",
                  backgroundColor: isColorContrasting()
                    ? "rgb(128, 128, 128, 0.25)"
                    : "rgba(255,255,255, 0.25)",
                  borderRadius: "30px",
                  padding: "6px 12px",
                  marginRight: "6px",
                  textAlign: "center",
                  "&:last-child": {
                    marginRight: 0,
                  },
                }}
              >
                {type.type.name}
              </Typography>
            ))}
          </Stack>

          <Box position="relative" bottom={-50} left={65} zIndex={2}>
            <Image
              src={officalArtworkImage}
              alt="pokemon"
              width={250}
              height={250}
            />
          </Box>

          <Box
            position="absolute"
            sx={{
              opacity: 0.5,
              mixBlendMode: isColorContrasting() ? "difference" : "normal",
            }}
            right={-40}
            bottom={-90}
            zIndex={0}
          >
            <Image
              src="/static/assets/icon/pokeball-icon.png"
              alt="pokemon-icon"
              width={300}
              height={300}
              priority
            />
          </Box>
        </Box>

        <PokemonDetail pokemon={pokemonDetail} />

        <PokemonList pokemons={pokemons} />
        <LoadMore />
      </Container>
    </Box>
  );
};

export default Detail;
