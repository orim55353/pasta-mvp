import React from "react";

import logo from "../../Assets/Pasta_loco_logo.png";
import "./container.styles.scss";

import { connect } from "react-redux";
import { setData, setExtras } from "../../redux/menu/menu.action";

import Cateogry from "../category/category.component";
import Dish from "../dish/dish.component";
import PastaContainer from "../pasta-container/pasta-container.component";
import SauceSelection from "../sauce-selection/sauce-selection.component";
import BottomControls from "../bottom-controls/bottom-controls.component";
import DishData from "../../model/dish";

import { db } from "../../firebase/firebase.utils";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      selectedDish: null,
      selectedPasta: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSauceClick = this.handleSauceClick.bind(this);
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

  handleSauceClick(dishProps) {
    if (this.props.chosen_pasta != null) {
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
    } else {
      alert("אנא בחר בסוג הפסטה לפני שנוכל להמשיך בהזמנה");
    }
  }

  handleClose() {
    this.setState({ selectedDish: null });
    document.querySelector("body").style.overflow = "visible";
  }

  componentDidMount() {
    const ref = db.ref("menu");
    ref.on("value", (snapshot) => {
      this.props.setData(snapshot.val().sections);
      this.props.setExtras(snapshot.val().extras);
      this.forceUpdate();
    });
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
          {this.props.sections.map(({ categories, id, ...props }) => (
            <div key={id}>
              {id === -1 ? (
                <div>
                  <PastaContainer {...props} pastas={categories[0].pastas} />
                  <SauceSelection
                    className="sauce-selection"
                    sauces={categories[0].sauces}
                    onClick={this.handleSauceClick}
                  />
                </div>
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
        <BottomControls className="bottom-controls" />
      </div>
    );
  }
}

const mapStateToProps = ({ pasta: { chosen_pasta }, menu: { sections } }) => ({
  chosen_pasta,
  sections,
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setData(data)),
  setExtras: (extras) => dispatch(setExtras(extras)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
