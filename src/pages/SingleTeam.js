import React from "react";
import { useParams } from "react-router-dom";

const SingleTeam = () => {
  const { name } = useParams();
  return <div>{name}</div>;
};

export default SingleTeam;
