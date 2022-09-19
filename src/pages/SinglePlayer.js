import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const SingleDiv = styled.div`
  margin: 30px;
`;

const SinglePlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  const getSinglePlayer = async () => {
    try {
      const { data } = await axios.get(
        `https://app.sportdataapi.com/api/v1/soccer/players/${id}?apikey=${process.env.REACT_APP_API_KEY}`
      );
      console.log(data);
      setPlayer(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSinglePlayer();
  }, []);

  return (
    <SingleDiv>
      {player?.img && <img src={player?.img} alt="Plyr" />}
      <h1>
        {player?.firstname} {player?.lastname}
      </h1>
      {player?.height && <h3>Height: {player.height}cm</h3>}
      {player?.weight && <h3>Weight: {player.weight}kg</h3>}
      {player?.country && (
        <h3>
          Country: {player.country.name}, {player.country.continent}
        </h3>
      )}
    </SingleDiv>
  );
};

export default SinglePlayer;
