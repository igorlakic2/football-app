import React from "react";
import CountriesAutocomplete from "../components/CountriesAutocomplete";
import RangeSlider from "../components/RangeSlider/RangeSlider";

const Players = () => {
  return (
    <div>
      <div style={{ margin: 20 }}>
        <CountriesAutocomplete />
        <RangeSlider />
      </div>
    </div>
  );
};

export default Players;
