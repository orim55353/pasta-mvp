import React from "react";

import logo from "../../Assets/Pasta_loco_logo.png";
import "./container.styles.scss";

import Cateogry from "../category/category.component";
import Dish from "../dish/dish.component";
import PastaContainer from "../pasta-container/pasta-container.component";

import DishData from "../../model/dish";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      selectedDish: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCloseDish = this.handleCloseDish.bind(this);
  }

  handleClick(dishProps) {
    var dishData = null;
    Object.values(dishProps).map((data) => {
      dishData = new DishData(
        data["name"],
        data["description"],
        data["price"],
        data["rating"],
        data["imageUrl"]
      );

      return null;
    });

    this.setState({ selectedDish: dishData });
    document.querySelector("body").style.overflow = "hidden";
  }

  handleCloseDish() {
    this.setState({ selectedDish: null });
    document.querySelector("body").style.overflow = "visible";
  }

  render() {
    return (
      <div className="container">
        {this.state.selectedDish !== null && (
          <Dish
            dishData={this.state.selectedDish}
            closeDish={this.handleCloseDish}
          ></Dish>
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
          {this.state.data.map(({ categories, id, ...props }) => (
            <div>
              {id === -1 ? (
                <PastaContainer
                  {...props}
                  pastas={categories[0].pastas}
                ></PastaContainer>
              ) : (
                <Cateogry
                  onClick={this.handleClick}
                  {...props}
                  categories={categories}
                ></Cateogry>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Container;
