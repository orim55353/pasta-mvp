import React from "react";

import logo from "../../Assets/Pasta_loco_logo.png";
import "./container.styles.scss";

import Cateogry from "../category/category.component";
import Dish from "../dish/dish.component";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      selectedDish: "no",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCloseDish = this.handleCloseDish.bind(this);
  }

  handleClick() {
    this.setState({ selectedDish: "yes" });
    document.querySelector("body").style.overflow = "hidden";
  }

  handleCloseDish() {
    this.setState({ selectedDish: "no" });
  }

  render() {
    return (
      <div className="container">
        {this.state.selectedDish === "yes" && (
          <Dish closeDish={this.handleCloseDish}></Dish>
        )}
        <div className="topImage">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="opening">
          <p>
            מסעדת פסטה לוקו היא מסעדה איטלקית כשרה יחידה במינה בעיר חדרה. יש
            אפשרות להרכיב מנות פסטה לפי בחירה ויש טאבון איטלקי משוגע להכנת פיצות
            ומאפים. בפסטה לוקו תוכלו להנות מאוכל איכותי, מגוון ועשיר, שרות אדיב
            ומהיר וכל זאת - בלי לצאת מהעיר !
          </p>
        </div>
        <div className="menu">
          {this.state.data.map(({ ...props }) => (
            <div>
              <Cateogry onClick={this.handleClick} {...props}></Cateogry>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Container;
