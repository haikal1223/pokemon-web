"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import Description from "../Description/Description";

const AboutTab = ({ pokemon }) => {
  const formatHeight = (value) => {
    const meters = (value / 10).toFixed(2);
    const formattedString = `${meters} m`;

    return formattedString;
  };

  const formatWeight = (value) => {
    const kilograms = (value / 10).toFixed(1);
    const formattedString = `${kilograms} kg`;

    return formattedString;
  };

  const abilityNames = pokemon.abilities
    .map((ability) => ability.ability.name)
    .join(", ");

  const eggGroupNames = pokemon.egg_groups
    .map((eggGroup) => eggGroup.name)
    .join(", ");
  return (
    <Box>
      <Description title="Habitat" value={pokemon.habitat.name} />
      <Description title="Height" value={formatHeight(pokemon.height)} />
      <Description title="Weight" value={formatWeight(pokemon.weight)} />
      <Description title="Abilities" value={abilityNames} />

      <Typography fontSize={18} fontWeight={700} mt={2} mb={1}>
        Breeding
      </Typography>
      <Description title="Egg Groups" value={eggGroupNames} />
    </Box>
  );
};

export default AboutTab;
