import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CountriesAutocomplete from "../components/FormsUI/CountriesAutocomplete/CountriesAutocomplete";
import SimpleModal from "../components/Modal/Modal";
import RangeSlider from "../components/FormsUI/RangeSlider/RangeSlider";
import { getCountries, getPlayers } from "../util/getFunctions";
import BasicTable from "../components/Table/Table";

const PlayersDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const FiltersDiv = styled.div`
  display: flex;
  margin: 20px;
  padding: 10px;

  & > * {
    padding: 20px;
  }
`;

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

  useEffect(() => {
    console.log(players);
  }, [players]);

  return (
    <div>
      <FiltersDiv>
        <CountriesAutocomplete
          countries={countries}
          onChange={(event) => setCountryId(event?.country_id)}
        />
        <RangeSlider setAges={setAges} ages={ages} />
      </FiltersDiv>
      <PlayersDiv>
        <BasicTable
          headers={["First name", "Last name", "Date of birth"]}
          data={players}
          // cells={players?.length > 0 ? Object.keys(players[0]) : []}
          cells={["firstname", "lastname", "birthday"]}
        />
      </PlayersDiv>
      {load && <SimpleModal />}
    </div>
  );
};

export default Players;
