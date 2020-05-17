import React from "react";
import "./table-dish.styles.scss";

import { storage } from "../../firebase/firebase.utils";

class TableDish extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      downloadUrl: "",
      ...this.props,
    };
  }

  componentDidMount() {
    let currentComponent = this;
    var imgRef = storage.child(`${"dishes/" + this.state.imageUrl}`);
    imgRef.getDownloadURL().then(function (url) {
      currentComponent.setState({ downloadUrl: url });
    });
  }

  render() {
    const { name, description, price, isOrder } = this.state;
    return (
      <div className="tableDish">
        <img src={this.state.downloadUrl} alt="dish"></img>
        <div className="text">
          <span className="name">{name}</span>
          <span className="description">{description}</span>
          {/* <div
            className="rating"
            style={{ display: `${isOrder === false ? "block" : "none"} ` }}
          >
            <span className="rate">4.2</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
          </div> */}
        </div>
        {/* <div
          className="stats"
          style={{ display: `${isOrder === false ? "grid" : "none"} ` }}
        >
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div> */}
        <span className="price">{price}₪</span>
      </div>
    );
  }
}

export default TableDish;
