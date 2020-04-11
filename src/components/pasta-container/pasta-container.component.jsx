import React from "react";
import Fade from "react-reveal/Fade";

import "./pasta-container.styles.scss";

import Title from "../title/title.component";
import PastaKind from "../pasta-kind/pasta-kind.component";
import TableDish from "../table-dish/table-dish.component";

class PastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPastaId: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({ selectedPastaId: id });
  }

  render() {
    return (
      <Fade>
        <div className="mainPasta">
          <Title title={this.props.title} img={this.props.img}></Title>
          <div className="info">
            <span className="step">1</span>
            <span className="description">בוחרים את סוג הפסטה</span>
          </div>
          <div className="pastaContainer">
            {this.props.pastas.map(({ id, ...props }) => (
              <div
                onClick={() => this.handleClick(id) /*() => onClick({ id })*/}
              >
                <PastaKind
                  {...props}
                  id={id}
                  isActive={this.state.selectedPastaId === id ? true : false}
                ></PastaKind>
              </div>
            ))}
          </div>
          <div className="info">
            <span className="step">2</span>
            <span className="description">בוחרים את הרוטב</span>
          </div>
          <TableDish></TableDish>
        </div>
      </Fade>
    );
  }
}

// const PastContainer = ({ title, pastas, img, onClick }) => (
// );

export default PastContainer;
