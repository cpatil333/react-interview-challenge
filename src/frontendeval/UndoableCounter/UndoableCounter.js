import React, { useState } from "react";
import "../../styles/UndoableCounter.css";

const UndoableCounter = () => {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([]);
  const [redoList, setRedoList] = useState([]);
  const [undoCount, setUndoCount] = useState(0);

  const maintainHistory = (key, prev, curr) => {
    console.log(key, prev, curr);
    const obj = {
      action: key,
      prev,
      curr,
    };
    const copyHistory = [...history];
    copyHistory.unshift(obj);
    setHistory(copyHistory);
  };

  const handleClick = (key) => {
    console.log(key);
    const val = parseInt(key); //conver string into number if values string
    maintainHistory(key, value, val + value);
    setValue((existingValue) => existingValue + val);
  };

  const handleUndo = () => {
    //stack LIFO - last in first order
    if (history.length) {
      if (undoCount + 1 > 5) {
        alert("You can undo beyond limit = 5");
        return;
      }
      const copyHist = [...history];
      const firstItem = copyHist.shift();
      setHistory(copyHist);

      setValue(firstItem.prev);

      const copyRedoList = [...redoList];
      copyRedoList.push(firstItem);

      setRedoList(copyRedoList);
    }
  };

  const handleRedo = () => {
    if (redoList.length) {
      const copyRedoList = [...redoList];
      const poppedValue = copyRedoList.pop();
      setRedoList(copyRedoList);
      const { action, prev, curr } = poppedValue;
      setValue(curr);
      maintainHistory(action, prev, curr);
    }
  };

  return (
    <div className="container">
      <h1>Undoable Counter</h1>
      <div className="action-btn">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
      </div>
      <div className="user-actions">
        {[-100, -10, -1].map((btn) => {
          return <button onClick={() => handleClick(btn)}>{btn}</button>;
        })}

        <div style={{ fontSize: "40px" }}>{value}</div>

        {["+1", "+10", "+100"].map((btn) => {
          return <button onClick={() => handleClick(btn)}>{btn}</button>;
        })}
      </div>
      <div className="history">
        {history.map((item) => {
          return (
            <div className="row">
              <div>{item.action}</div>
              <div>{`[${item.prev} => ${item.curr}]`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UndoableCounter;
