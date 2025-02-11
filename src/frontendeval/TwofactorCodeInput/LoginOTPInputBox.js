import React, { useEffect, useRef, useState } from "react";
import "../../styles/TwofactorCodeInput.css";

const LoginOTPInputBox = () => {
  const emtpyArr = ["", "", "", ""];
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const [inputs, setInputs] = useState(emtpyArr);
  const [missing, setMissing] = useState(emtpyArr);
  const CODE = "1234";
  const handleSubmit = () => {
    const missed = inputs
      .map((item, i) => {
        if (item === "") {
          return i;
        }
      })
      .filter((item) => item || item === 0);
    console.log(missed);
    setMissing(missed);

    //if user not input any value or missing any value
    if (missed.length) {
      return;
    }
    const userInputs = inputs.join("");
    const isMatch = userInputs === CODE;
    const msg = isMatch ? "Code is valid" : "Code is not valid";
    alert(msg);
  };

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  const handleInputChange = (e, index) => {
    e.preventDefault();
    const val = e.target.value;
    console.log(val, index);
    if (!Number(val)) {
      return;
    }
    //Focus on next text box
    if (index < inputs.length - 1) {
      refs[index + 1].current.focus();
    }

    const copyInputs = [...inputs];
    copyInputs[index] = val;
    setInputs(copyInputs);
  };

  const handleOnKeyDown = (e, index) => {
    console.log(e.keyCode, index);
    if (e.keyCode === 8) {
      const copyInputs = [...inputs];
      copyInputs[index] = "";
      setInputs(copyInputs);

      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text");
    console.log("paste data ", data);
    if (!Number(data) || data.length !== inputs.length) {
      return;
    }
    const copyPaste = data.split(" ");
    setInputs(copyPaste);
    refs[inputs.length - 1].current.focus();
  };

  return (
    <>
      <div className="container">
        <h1>Tow-Factor code input</h1>
        <div>
          {emtpyArr.map((item, index) => {
            return (
              <input
                key={index}
                type="text"
                ref={refs[index]}
                maxLength={1}
                onPaste={handlePaste}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleOnKeyDown(e, index)}
                className={missing.includes(index) ? "error" : ""}
              />
            );
          })}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default LoginOTPInputBox;
