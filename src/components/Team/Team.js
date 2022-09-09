import React from "react";
import styled from "styled-components";

const TeamCardDiv = styled.div`
  border: 2px solid black;
  width: 150px;
  padding: 15px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  //   height: 300px;
`;

const Team = ({ logo, name }) => {
  return (
    <TeamCardDiv>
      <img src={logo} alt={name} />
      <p>{name}</p>
    </TeamCardDiv>
  );
};

export default Team;
