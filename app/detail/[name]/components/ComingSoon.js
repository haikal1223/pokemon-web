import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const ComingSoon = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Box position="relative">
        <Image
          src="/static/assets/logo/coming-soon.png"
          alt="coming-soon"
          width={300}
          height={200}
        />
      </Box>
    </Stack>
  );
};

export default ComingSoon;
