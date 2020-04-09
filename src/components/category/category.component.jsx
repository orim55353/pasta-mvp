import React from "react";

import Title from "../title/title.component";

import startersBg from "../../Assets/starters_bg.png";
import fukacha from "../../Assets/fukacha.png";

import CategoryTab from "../misc/category-tab/category-tab.component";
import TableDish from "../table-dish/table-dish.component";

import "./category.styles.scss";

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.title,
      img: startersBg,
      categories: this.props.categories,
      handleClick: this.props.onClick,
    };
  }

  render() {
    return (
      <div className="category">
        <Title title={this.state.name} img={this.state.img}></Title>
        {this.state.categories.map(({ name, description, dishes, id }) => (
          <div className="dishesContainer">
            <div className="overlay">
              {id !== -1 ? (
                <CategoryTab
                  name={name}
                  description={description}
                  className="tab"
                  direction={`${id % 2 === 0 ? "left" : "right"}`}
                ></CategoryTab>
              ) : null}
              {dishes.map(({ ...dishProps }) => (
                <div className="dish" onClick={this.state.handleClick}>
                  <TableDish img={fukacha} {...dishProps} onC></TableDish>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Category;
