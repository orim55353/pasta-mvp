import React from "react";

import EasybiteButton from "../../misc/easybite-button/easybite-button.component";
import ExtrasItem from "../../misc/extras/extras-item.component";

import { connect } from "react-redux";
import { addItem } from "../../../redux/order/order.action";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "./addToCart.styles.scss";

class AddToCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dish: this.props.dish,
      comment: "",
      extras: [],
    };

    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleAddDish = this.handleAddDish.bind(this);
  }

  handleCommentChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleExtraClick(newId) {
    if (this.state.extras.includes(newId)) {
      this.setState({
        extras: this.state.extras.filter((id) => id !== newId),
      });
    } else {
      this.setState({ extras: [...this.state.extras, newId] });
    }
  }

  handleAddDish() {
    this.props.addItem({ ...this.state });
    alert("המנה הוספה להזמנתך, בתיאבון!");
    this.props.handleBack(true);
  }

  render() {
    const { show, dish, handleBack } = this.props;
    return (
      <div className={`${show === false ? "hide" : "show"} adding-to-cart`}>
        <button className="back-btn" onClick={() => handleBack(false)}>
          <ArrowBackIcon className="icon"></ArrowBackIcon>
        </button>
        <div className="info">
          <span className="name">{dish.name}</span>
          <span className="price">{dish.price}₪</span>
        </div>
        <div className="comments">
          <span>:הערות</span>
          <textarea
            name="comment"
            className="comment"
            placeholder="כתוב כאן את העירותך לשף"
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div className="extras">
          <span>:תוספות</span>
          <div className="extrasContainer">
            {this.props.extras.map(({ id, name, price }) => (
              <div key={id} onClick={() => this.handleExtraClick(1)}>
                <ExtrasItem
                  key={id}
                  name={name}
                  price={price}
                  isActive={this.state.extras.includes(1) ? true : false}
                />
              </div>
            ))}
          </div>
        </div>
        <EasybiteButton
          className="addToCart"
          onClick={() => this.handleAddDish()}
        >
          הוסף לחשבון
        </EasybiteButton>
        <ExtrasItem
          name="זיתים ירוקים"
          price="3"
          isActive={this.state.extras.includes(1) ? true : false}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ menu: { extras } }) => ({
  extras,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
