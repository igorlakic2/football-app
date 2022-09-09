import React, { useEffect } from "react";
import axios from "axios";

const Countries = () => {
  const getCountries = async () => {
    try {
      const response = await axios.get(
        `https://app.sportdataapi.com/api/v1/soccer/countries?apikey=${process.env.REACT_APP_API_KEY}&continent=Europe`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return <div>Countries</div>;
};

export default Countries;
