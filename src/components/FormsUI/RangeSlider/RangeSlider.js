import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

export default function RangeSlider({ ages, setAges }) {
  const handleChange = (event, newValue) => {
    setAges(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="input-slider" gutterBottom>
        Age range {ages[0]} - {ages[1]}
      </Typography>
      <Slider
        min={17}
        step={1}
        max={40}
        getAriaLabel={() => "Temperature range"}
        value={ages}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="input-slider"
      />
    </Box>
  );
}
