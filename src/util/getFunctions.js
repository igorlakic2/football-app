import axios from "axios";

export const getCountries = async (setCountries) => {
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

export const getTeamsByCountry = async (country, setLoad, setTeams) => {
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

export const getPlayers = async (countryId, ages, setPlayers, setLoad) => {
  try {
    setLoad(true);
    const { data } = await axios.get(
      `https://app.sportdataapi.com/api/v1/soccer/players?apikey=${process.env.REACT_APP_API_KEY}&country_id=${countryId}&min_age=${ages[0]}&max_age=${ages[1]}`
    );
    console.log(data.data);
    setPlayers(data.data);
    setLoad(false);
  } catch (error) {
    console.log(error);
  }
};
