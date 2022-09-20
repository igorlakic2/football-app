import React, { useEffect, useState } from "react";
import CountriesAutocomplete from "../components/FormsUI/CountriesAutocomplete/CountriesAutocomplete";
import SimpleModal from "../components/Modal/Modal";
import { getCountries, getLeagues } from "../util/getFunctions";

const Leagues = () => {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  const [countryId, setCountryId] = useState("");
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    getCountries(setCountries);
  }, []);

  useEffect(() => {
    if (countryId !== "") getLeagues(countryId, setLeagues, setLoad);
  }, [countryId]);

  return (
    <div style={{ padding: 20 }}>
      <CountriesAutocomplete
        countries={countries}
        onChange={(event) => setCountryId(event?.country_id)}
      />
      {load && <SimpleModal />}
    </div>
  );
};

export default Leagues;
