import React, { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styled from "styled-components";
import Team from "../components/Team/Team";
import SimpleModal from "../components/Modal/Modal";

const TeamsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const Teams = () => {
  const [countries, setCountries] = useState([]);
  const [teams, setTeams] = useState([]);
  const [load, setLoad] = useState(false);

  const getCountries = async () => {
    try {
      const { data } = await axios.get(
        `https://app.sportdataapi.com/api/v1/soccer/countries?apikey=${process.env.REACT_APP_API_KEY}&continent=Europe`
      );
      const countriesArray = Object.values(data.data);

      const itemToRemove = countriesArray.findIndex(
        (element) => element.country_id === 69
      );
      countriesArray.splice(itemToRemove, 1);

      setCountries(countriesArray);
    } catch (error) {
      console.log(error);
    }
  };

  const getTeamsByCountry = async (country) => {
    try {
      if (country) {
        setLoad(true);
        const { data } = await axios.get(
          `https://app.sportdataapi.com/api/v1/soccer/teams?apikey=${process.env.REACT_APP_API_KEY}&country_id=${country.country_id}`
        );
        const teamsArray = Object.values(data.data);
        setTeams(teamsArray);
        setLoad(false);
      }
    } catch (error) {
      setLoad(false);
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
        onChange={(event, value) => getTeamsByCountry(value)}
        onClose={() => setTeams([])}
      />
      <TeamsDiv>
        {teams.map((team) => (
          <Team logo={team.logo} name={team.name} key={team.team_id} />
        ))}
      </TeamsDiv>
      {load && <SimpleModal />}
    </div>
  );
};

export default Teams;
