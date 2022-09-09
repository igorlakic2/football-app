import React, { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get(
        `https://app.sportdataapi.com/api/v1/soccer/countries?apikey=${process.env.REACT_APP_API_KEY}&continent=Europe`
      );
      const countriesArray = Object.values(response.data.data);

      const itemToRemove = countriesArray.findIndex(
        (element) => element.country_id === 69
      );
      countriesArray.splice(itemToRemove, 1);

      setCountries(countriesArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={countries}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Country" />}
        getOptionLabel={(option) => option.name}
      />
    </div>
  );
};

export default Countries;
