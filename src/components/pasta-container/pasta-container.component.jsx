import React from "react";
import Fade from "react-reveal/Fade";

import "./pasta-container.styles.scss";

import Title from "../title/title.component";
import PastaKind from "../pasta-kind/pasta-kind.component";

const PastContainer = ({ title, pastas, img }) => (
  <Fade>
    <div className="mainPasta">
      <Title title={title} img={img}></Title>
      <div className="info">
        <span className="step">1</span>
        <span className="description">בוחרים את סוג הפסטה</span>
      </div>
      <div className="pastaContainer">
        {pastas.map(({ ...props }) => (
          <div>
            <PastaKind {...props}></PastaKind>
          </div>
        ))}
      </div>
    </div>
  </Fade>
);

export default PastContainer;
