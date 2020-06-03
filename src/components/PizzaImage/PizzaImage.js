import React from "react";

import PizzaImage from "../../assets/original.jpg";

const pizzaImage = (props) => {
  return (
    <div className={classes.PizzaImage}>
      <img src={PizzaImage} className={classes.PizzaImg} />
    </div>
  );
};

export default pizzaImage;
