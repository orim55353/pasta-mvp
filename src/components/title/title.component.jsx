import React from "react";

import "./title.styles.scss";

import { storage } from "../../firebase/firebase.utils";

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      downloadUrl: "",
      ...this.props,
    };
  }

  componentDidMount() {
    let currentComponent = this;
    var imgRef = storage.child(`${"dishes/" + this.state.img}`);
    imgRef.getDownloadURL().then(function (url) {
      currentComponent.setState({ downloadUrl: url });
    });
  }

  render() {
    const { title } = this.state;

    return (
      <div className="title">
        <img className="title" src={this.state.downloadUrl} alt=""></img>
        <span>{title}</span>
      </div>
    );
  }
}
export default Title;
