"use client";
import { Box, Tabs, Tab, Container } from "@mui/material";
import React, { useState } from "react";
import AboutTab from "./Tabs/AboutTab";
import BaseStatsTab from "./Tabs/BaseStatsTab";
import EvolutionTab from "./Tabs/EvolutionTab";
import MovesTab from "./Tabs/MovesTab";

const PokemonDetail = ({ pokemon }) => {
  const [tabValue, setTabValue] = useState(0);
  const tabComponents = [AboutTab, BaseStatsTab, EvolutionTab, MovesTab];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const TabContent = () => {
    const TabComponent = tabComponents[tabValue];
    return <TabComponent pokemon={pokemon} />;
  };
  return (
    <Box
      bgcolor="white"
      width="100%"
      height="100%"
      minHeight="311px"
      borderRadius="24px"
      pt="30px"
      boxShadow=" 1px 1px 12px 1px rgba(0,0,0,0.50)"
      position="relative"
      zIndex={1}
    >
      <Container maxWidth="sm">
        <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: "24px" }}>
          <Tab label="About" value={0} />
          <Tab label="Base Stats" value={1} />
          <Tab label="Evolution" value={2} />
          <Tab label="Moves" value={3} />
        </Tabs>
        <TabContent />
      </Container>
    </Box>
  );
};

export default PokemonDetail;
