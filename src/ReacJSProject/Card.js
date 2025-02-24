import React from "react";
import ProductCart from "./ProductCart";
import "../ReacJSProject/ProductCart.css";
import Burger from "../Assets/Burger.jpg";
import Salad from "../Assets/Salad.jpg";
import Meatballs from "../Assets/Meatballs.jpg";

const Card = () => {
  return (
    <div className="product">
      <ProductCart
        image={Burger}
        name="Burger"
        price="$5.40"
        description="Eat Burger"
      />
      <ProductCart
        image={Salad}
        name="Salad"
        price="$6.40"
        description="Eat Burger"
      />
      <ProductCart
        image={Meatballs}
        name="Meatballs"
        price="$5.10"
        description="Eat Meatballs"
      />
    </div>
  );
};

export default Card;
