import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import React from "react";
import DescriptionWithBar from "../Description/DescriptionWithBar";

const BaseStatsTab = ({ pokemon }) => {
  const statsObject = {};
  pokemon.stats.forEach((stat) => {
    statsObject[stat.stat.name] = stat.base_stat;
  });

  const totalBaseStats = Object.values(statsObject).reduce(
    (total, value) => total + value,
    0
  );

  return (
    <Box>
      <DescriptionWithBar title="HP" value={statsObject.hp} />
      <DescriptionWithBar title="Attack" value={statsObject.attack} />
      <DescriptionWithBar title="Defense" value={statsObject.defense} />
      <DescriptionWithBar
        title="Sp. Atk"
        value={statsObject["special-attack"]}
      />
      <DescriptionWithBar
        title="Sp. Def"
        value={statsObject["special-defense"]}
      />
      <DescriptionWithBar title="Speed" value={statsObject.speed} />
      <DescriptionWithBar title="Total" value={totalBaseStats} />
    </Box>
  );
};

export default BaseStatsTab;
