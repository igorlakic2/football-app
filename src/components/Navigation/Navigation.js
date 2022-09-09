import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
        <li>
          <Link to="/leagues">Leagues</Link>
        </li>
        <li>
          <Link to="/players">Players</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
