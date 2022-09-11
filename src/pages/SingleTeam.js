import React from "react";
import { useParams } from "react-router-dom";

const SingleTeam = () => {
  const { id } = useParams();
  return <div>SingleTeam</div>;
};

export default SingleTeam;
