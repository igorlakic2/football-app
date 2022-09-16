import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Team from "../components/Cards/Team/Team";
import SimpleModal from "../components/Modal/Modal";
import CountriesAutocomplete from "../components/FormsUI/CountriesAutocomplete/CountriesAutocomplete";
import { getCountries, getTeamsByCountry } from "../util/getFunctions";

const TeamsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const Teams = () => {
  const [countries, setCountries] = useState([]);
  const [teams, setTeams] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getCountries(setCountries);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <CountriesAutocomplete
        countries={countries}
        onChange={(event) => getTeamsByCountry(event, setLoad, setTeams)}
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
