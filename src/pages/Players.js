import React, { useState, useEffect } from "react";
import CountriesAutocomplete from "../components/CountriesAutocomplete";
import SimpleModal from "../components/Modal/Modal";
import RangeSlider from "../components/RangeSlider/RangeSlider";
import {
  getCountries,
  getPlayers,
  getTeamsByCountry,
} from "../util/getFunctions";

const Players = () => {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  const [countryId, setCountryId] = useState("");
  const [players, setPlayers] = useState([]);
  const [ages, setAges] = useState([17, 45]);

  useEffect(() => {
    getCountries(setCountries);
  }, []);

  useEffect(() => {
    if (countryId !== "") getPlayers(countryId, ages, setPlayers, setLoad);
  }, [countryId, ages]);

  return (
    <div>
      <div style={{ margin: 20 }}>
        <CountriesAutocomplete
          countries={countries}
          onChange={(event) => setCountryId(event?.country_id)}
        />
        <RangeSlider setAges={setAges} ages={ages} />
      </div>
      {load && <SimpleModal />}
    </div>
  );
};

export default Players;
