import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

// function valuetext(value) {
//   return `${value}°C`;
// }

export default function RangeSlider({ ages, setAges }) {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setAges(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="input-slider" gutterBottom>
        Age range
      </Typography>
      <Slider
        min={17}
        step={1}
        max={40}
        getAriaLabel={() => "Temperature range"}
        value={ages}
        onChange={handleChange}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
        aria-labelledby="input-slider"
      />
    </Box>
  );
}
