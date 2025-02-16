import { useState, useEffect } from "react";

const DelayedInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    let timeoutId = null;

    const delayedUpdateDisplay = () => {
      timeoutId = setTimeout(() => {
        setDisplayValue(inputValue);
      }, 2000);
    };

    clearTimeout(timeoutId);

    delayedUpdateDisplay();

    //clean up
    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(displayValue);
  return (
    <div>
      <h2>Delay Input</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          placeholder="Text...."
          onChange={handleInputChange}
        />
        <p>Display Delay : {displayValue}</p>
      </div>
    </div>
  );
};

export default DelayedInput;
