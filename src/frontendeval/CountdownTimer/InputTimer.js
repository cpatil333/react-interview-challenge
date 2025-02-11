import React from "react";

const InputTimer = ({ handleInput, handleStart }) => {
  return (
    <div>
      <div className="input-container">
        <div className="input-box">
          <input
            id="hours"
            type="text"
            placeholder="HH"
            onChange={handleInput}
          />
          <input
            id="minutes"
            type="text"
            placeholder="MM"
            onChange={handleInput}
          />
          <input
            id="seconds"
            type="text"
            placeholder="SS"
            onChange={handleInput}
          />
        </div>
        <button className="timer-button" onClick={handleStart}>
          Start
        </button>
      </div>
    </div>
  );
};

export default InputTimer;
