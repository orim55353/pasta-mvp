import React from "react";

import logo from "../../Assets/Pasta_loco_logo.png";
import "./container.styles.scss";

import Cateogry from "../category/category.component";
import Dish from "../dish/dish.component";

import PastaContainer from "../pasta-container/pasta-container.component";
import SauceSelection from "../sauce-selection/sauce-selection.component";

import DishData from "../../model/dish";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      selectedDish: null,
      selectedPasta: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlePastaClick = this.handlePastaClick.bind(this);
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

  handleClose() {
    console.log(this.state);
    if (this.state.selectedDish !== null) {
      this.setState({ selectedDish: null });
    } else {
      this.setState({ selectedPasta: 0 });
    }
    document.querySelector("body").style.overflow = "visible";
  }

  handlePastaClick(pastaId) {
    this.setState({ selectedPasta: pastaId });
    document.querySelector("body").style.overflow = "hidden";
  }

  render() {
    return (
      <div className="container">
        {this.state.selectedDish !== null && (
          <Dish
            dishData={this.state.selectedDish}
            closeDish={this.handleClose}
          ></Dish>
        )}

        {this.state.selectedPasta !== 0 && (
          <SauceSelection handleClose={this.handleClose}></SauceSelection>
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
                  onClick={this.handlePastaClick}
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
