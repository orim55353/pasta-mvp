import React from "react";

import EasybiteButton from "../../misc/easybite-button/easybite-button.component";
import ExtrasItem from "../../misc/extras/extras-item.component";

import { connect } from "react-redux";
import { addItem, updatedDish } from "../../../redux/order/order.action";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "./addToCart.styles.scss";

class AddToCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dish: this.props.dish,
      comment: "",
      extras: this.props.newExtras != null ? this.props.newExtras : [],
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
    if (this.props.newExtras != null) {
      this.props.updateDish({ ...this.state });
      alert("המנה עודכנה בהזמנתך, בתיאבון!");
      this.props.handleBack(true);
    } else {
      this.props.addItem({ ...this.state });
      alert("המנה הוספה להזמנתך, בתיאבון!");
      this.props.handleBack(true);
    }
  }

  render() {
    const { show, dish, handleBack, comment } = this.props;

    if (dish != null) {
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
            >
              {comment}
            </textarea>
          </div>
          <div className="extras">
            <span>:תוספות</span>
            <div className="extrasContainer">
              {this.props.extras.map(({ id, name, price }) => (
                <div key={id} onClick={() => this.handleExtraClick(id)}>
                  <ExtrasItem
                    key={id}
                    name={name}
                    price={price}
                    isActive={this.state.extras.includes(id) ? true : false}
                  />
                </div>
              ))}
            </div>
          </div>
          <EasybiteButton
            className="addToCart"
            onClick={() => this.handleAddDish()}
          >
            {this.props.newExtras != null ? "עדכן מנה" : "הוסף לחשבון"}
          </EasybiteButton>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = ({ menu: { extras } }) => ({
  extras,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  updateDish: (dish) => dispatch(updatedDish(dish)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
