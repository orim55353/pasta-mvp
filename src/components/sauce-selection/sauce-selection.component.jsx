import React from "react";

import "./sauce-selection.styles.scss";

import Fade from "react-reveal/Fade";
import TableDish from "../table-dish/table-dish.component";

const SauceSelection = ({ sauces, onClick }) => (
  <Fade>
    <div className="sauceContainer">
      <div className="info">
        <span className="step">2</span>
        <span className="description">בוחרים את הרוטב</span>
      </div>
      <div className="data">
        {sauces.map(({ id, ...dishProps }) => (
          <div
            key={id}
            className="sauce"
            onClick={() => onClick({ dishProps })}
          >
            <TableDish {...dishProps}></TableDish>
          </div>
        ))}
      </div>
    </div>
  </Fade>
);
export default SauceSelection;
