import React from "react";
import { useParams } from "react-router-dom";

const SinglePlayer = () => {
  const { id } = useParams();
  return <div>SinglePlayer {id}</div>;
};

export default SinglePlayer;
