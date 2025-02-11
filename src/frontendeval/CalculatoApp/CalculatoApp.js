import React, { useState } from "react";
import "../../styles/CalculatoApp.css";

const CalculatoApp = () => {
  const [value, setValue] = useState("");
  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    "=",
    "C",
    ".",
  ];

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  console.log(value);

  const handleClick = (e) => {
    console.log(e.target.id);
    const id = e.target.id;
    if (id === "C") {
      setValue("");
    } else if (id === "=") {
      //produce a result
      handleSubmit();
    } else {
      setValue((val) => val + id);
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    try {
      const ans = eval(value);
      setValue(ans);
    } catch (error) {
      alert("Invalid Inputs");
    }
  };

  return (
    <div className="app">
      <h1>Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleInputChange} />
      </form>
      <div className="container" onClick={handleClick}>
        {arr.map((item, index) => {
          return (
            <button key={index} id={item} className="cell">
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalculatoApp;
