"use client";
import { fetchPokemons } from "@/actions/fetchPokemon";
import { Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PokemonList from "./PokemonList";
import Image from "next/image";

const LoadMore = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pagesLoaded, setPagesLoaded] = useState(1);
  const { ref, inView } = useInView();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const loadMorePokemons = async () => {
    await delay(2000);
    const nextPage = pagesLoaded + 1;
    const newEntries = (await fetchPokemons(nextPage)) ?? [];
    setPokemons((prevEntries) => [...prevEntries, ...newEntries]);
    setPagesLoaded(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMorePokemons();
    }
  }, [inView]);

  return (
    <>
      <PokemonList pokemons={pokemons} />
      <Stack alignItems="center" ref={ref} mt={2}>
        <Image
          src="/static/assets/gif/loading-pokeball.gif"
          alt="loading..."
          width={250}
          height={200}
        />
      </Stack>
    </>
  );
};

export default LoadMore;
