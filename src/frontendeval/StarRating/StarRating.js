import React, { useState } from "react";
import "../../styles/StarRating.css";

const StarRating = () => {
  const arr = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  console.log("rating: ", rating);
  console.log("hover: ", hover);
  console.log(" (rating && hover) || hover: ", (rating && hover) || hover);
  return (
    <div className="container">
      {arr.map((num) => {
        return (
          <button
            key={num}
            onClick={() => setRating(num)}
            onMouseOver={() => setHover(num)}
            onMouseLeave={() => setHover(rating)}
          >
            <span
              className={`star ${
                num <= ((rating && hover) || hover) ? "on" : "off"
              }`}
            >
              &#9733;
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
