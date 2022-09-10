import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const CountriesAutocomplete = ({ onChange, countries }) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={countries}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Country" />}
      getOptionLabel={(option) => option.name}
      onChange={(event, value) => onChange(value)}
    />
  );
};

export default CountriesAutocomplete;
