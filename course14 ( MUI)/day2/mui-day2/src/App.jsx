import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Stack,
  IconButton,
} from "@mui/material";
import {
  Code,
  DesignServices,
  Speed,
  Facebook,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Box sx={{ fontFamily: "Inter, sans-serif", width: "100%" }}>
        <Navbar></Navbar>
        <Hero></Hero>
        <Features></Features>
        <CTA></CTA>
        <Footer></Footer>
    </Box>
  );
}
