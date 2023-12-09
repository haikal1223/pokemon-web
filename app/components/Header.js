"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <Image
        alt="logo"
        src="/static/assets/logo/pokemon-logo.webp"
        width={100}
        height={50}
      />
    </Link>
  );
};

export default Header;
