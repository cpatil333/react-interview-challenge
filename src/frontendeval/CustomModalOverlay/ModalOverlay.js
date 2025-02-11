import React, { useState } from "react";
import "../../styles/ModalOveStyle.css";
import Model from "./Model";

const ModalOverlay = () => {
  const [isShow, setIsShow] = useState(false);
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);

  const handleModel = () => {
    setIsShow(true);
  };
  const handleClose = () => {
    setIsShow(false);
  };

  const handleOfferAccepted = () => {
    setIsOfferAccepted(true);
    setIsShow(false);
  };
  return (
    <div>
      <div className="show-offer">
        {!isOfferAccepted && (
          <button className="offer-btn" onClick={handleModel}>
            Show Offer
          </button>
        )}
        {isOfferAccepted && (
          <div style={{ fontSize: "50px" }}>Offer Accepted</div>
        )}
      </div>
      {isShow && (
        <Model
          handleClose={handleClose}
          handleOfferAccepted={handleOfferAccepted}
        />
      )}
    </div>
  );
};

export default ModalOverlay;
