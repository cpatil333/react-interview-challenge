import React from "react";

const Model = ({ handleClose, handleOfferAccepted }) => {
  const handleOutSideClick = (e) => {
    console.log(e.target.className);
    if (e.target.className === "model") {
      handleClose();
    }
  };

  return (
    <div className="model" onClick={handleOutSideClick}>
      <div className="model-content">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>

        <div className="content">
          click the button below to accpet or amazing offer!
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="accept-btn" onClick={handleOfferAccepted}>
            Accept Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
