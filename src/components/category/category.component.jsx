import React from "react";

import Title from "../title/title.component";

import startersBg from "../../Assets/starters_bg.png";
import fukacha from "../../Assets/fukacha.png";

import CategoryTab from "../misc/category-tab/category-tab.component";
import TableDish from "../table-dish/table-dish.component";

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.title,
      img: startersBg,
      categories: this.props.categories,
    };
  }

  render() {
    return (
      <div className="category">
        <Title title={this.state.name} img={this.state.img}></Title>
        {this.state.categories.map(({ name, description, dishes, id }) => (
          <div>
            {id !== -1 ? (
              <CategoryTab
                name={name}
                description={description}
                className="tab"
                direction={`${id % 2 === 0 ? "left" : "right"}`}
              ></CategoryTab>
            ) : null}
            {dishes.map(({ ...dishProps }) => (
              <TableDish img={fukacha} {...dishProps}></TableDish>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Category;
