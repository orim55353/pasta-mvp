import React from "react";
import Fade from "react-reveal/Fade";

import Title from "../title/title.component";

import CategoryTab from "../misc/category-tab/category-tab.component";
import TableDish from "../table-dish/table-dish.component";

import "./category.styles.scss";

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.title,
      img: this.props.img,
      categories: this.props.categories,
      handleClick: this.props.onClick,
    };
  }

  render() {
    return (
      <div className="category">
        <Fade>
          <Title title={this.state.name} img={this.state.img}></Title>
        </Fade>
        {this.state.categories.map(({ name, description, dishes, id }) => (
          <div className="dishesContainer">
            {id !== -1 ? (
              <Fade>
                <CategoryTab
                  name={name}
                  description={description}
                  className="tab"
                  direction={`${id % 2 === 0 ? "left" : "right"}`}
                ></CategoryTab>
              </Fade>
            ) : null}
            {dishes.map(({ ...dishProps }) => (
              <Fade>
                <div
                  className="dish"
                  onClick={() => this.state.handleClick({ dishProps })}
                >
                  <TableDish {...dishProps}></TableDish>
                </div>
              </Fade>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Category;
