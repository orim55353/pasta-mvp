import React from "react";
import Fade from "react-reveal/Fade";

import "./pasta-container.styles.scss";

import Title from "../title/title.component";
import PastaKind from "../pasta-kind/pasta-kind.component";

import { connect } from "react-redux";
import { choosePasta } from "../../redux/pasta/pasta.actions";

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
    this.props.choosePasta(id);
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
              <div key={id} onClick={() => this.handleClick(id)}>
                <PastaKind
                  {...props}
                  id={id}
                  isActive={this.state.selectedPastaId === id ? true : false}
                ></PastaKind>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  choosePasta: (pastaId) => dispatch(choosePasta(pastaId)),
});

export default connect(null, mapDispatchToProps)(PastContainer);
