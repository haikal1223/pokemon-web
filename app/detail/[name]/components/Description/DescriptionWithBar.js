import React from "react";
import { LinearProgress, Stack, Typography } from "@mui/material";

const DescriptionWithBar = ({ title, value }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography width="20%">{title}</Typography>
      <Typography>{value}</Typography>
      <LinearProgress
        variant="determinate"
        value={value > 100 ? 100 : value}
        sx={{ width: "40%" }}
      />
    </Stack>
  );
};

export default DescriptionWithBar;
