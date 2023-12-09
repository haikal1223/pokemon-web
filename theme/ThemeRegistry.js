"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import CssBaseline from "@mui/material/CssBaseline";
import { Roboto, Nova_Square } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const novaSquare = Nova_Square({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const themeOptions = {
  typography: {
    fontFamily: novaSquare.style.fontFamily,
  },
  breakpoints: {
    xs: 0,
    sm: 600,
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
