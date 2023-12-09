import React from "react";
import { Stack, Typography } from "@mui/material";

const Description = ({ title, value }) => {
  return (
    <Stack flexDirection="row" mb={0.5}>
      <Typography color="#aaadb1" width="40%">
        {title}
      </Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
};

export default Description;
