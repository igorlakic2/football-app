import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PlayerCardDiv = styled.div`
  border: 2px solid black;
  width: 150px;
  padding: 15px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
`;

const Player = ({ firstName, lastName, player_id }) => {
  const navigate = useNavigate();

  return (
    <PlayerCardDiv onClick={() => navigate(`/single-player/${player_id}`)}>
      <p>
        {firstName} {lastName}
      </p>
    </PlayerCardDiv>
  );
};

export default Player;
