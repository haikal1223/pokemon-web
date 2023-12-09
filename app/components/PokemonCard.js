"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, Children } from "react";

const PokemonCard = ({ name, pokemonColor, image, pokemonTypes }) => {
  // ========================================================== Function
  const isColorContrasting = useMemo(() => {
    const nonContrastingColors = ["yellow", "white"];

    if (nonContrastingColors.some((color) => pokemonColor.includes(color))) {
      return true;
    }
    return false;
  }, [pokemonColor]);

  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Link href={`/detail/${name}`} style={{ textDecoration: "none" }}>
      <Box
        bgcolor={pokemonColor}
        p="12px"
        borderRadius="16px"
        position="relative"
        overflow="hidden"
        boxShadow=" 1px 1px 12px 1px rgba(0,0,0,0.50)"
        sx={{
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
            transition: "transform 0.3s ease-in-out",
          },
        }}
      >
        <Typography color={isColorContrasting ? "black" : "white"}>
          {formattedName}
        </Typography>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          zIndex={2}
          position="relative"
        >
          <Box pt="12px">
            {Children.toArray(
              pokemonTypes.map((type) => (
                <Typography
                  sx={{
                    color: isColorContrasting ? "black" : "white",
                    fontSize: "12px",
                    backgroundColor: isColorContrasting
                      ? "rgb(128, 128, 128, 0.25)"
                      : "rgba(255,255,255, 0.25)",
                    borderRadius: "30px",
                    padding: "6px 12px",
                    marginBottom: "6px",
                    textAlign: "center",
                    "&:last-child": {
                      marginBottom: 0,
                    },
                  }}
                >
                  {type}
                </Typography>
              ))
            )}
          </Box>

          <Box position="relative">
            <Image src={image} alt="pokemon" width={90} height={90} />
          </Box>
        </Stack>

        <Box
          position="absolute"
          sx={{
            opacity: 0.5,
            mixBlendMode: isColorContrasting ? "difference" : "normal",
          }}
          right={-10}
          bottom={-10}
          zIndex={1}
        >
          <Image
            src="/static/assets/icon/pokeball-icon.png"
            alt="pokemon-icon"
            width={100}
            height={100}
            priority
          />
        </Box>
      </Box>
    </Link>
  );
};

export default PokemonCard;
