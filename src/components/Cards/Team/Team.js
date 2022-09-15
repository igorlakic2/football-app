import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TeamCardDiv = styled.div`
  border: 2px solid black;
  width: 150px;
  padding: 15px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
`;

const Team = ({ logo, name }) => {
  const navigate = useNavigate();

  return (
    <TeamCardDiv onClick={() => navigate(`/single-team/${name}`)}>
      <img src={logo} alt={name} />
      <p>{name}</p>
    </TeamCardDiv>
  );
};

export default Team;
