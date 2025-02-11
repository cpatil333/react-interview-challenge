import React, { useEffect, useState } from "react";
import "../../styles/DebounceAutoSuggest.css";
import debouceQuery from "./FetchItems";
const DebounceAutoSuggest = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  //https://api.frontendeval.com/fake/food
  const initApiCall = async () => {
    const url = `https://api.frontendeval.com/fake/food/${input}`;
    const data = await debouceQuery(url);
    setList(data);
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    initApiCall();
  }, [input]);

  return (
    <div className="App">
      <h1>Debounce API call</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      {list && list.length > 0 && (
        <div className="list">
          {list && list.map((item, index) => <div key={item}>{item}</div>)}
        </div>
      )}
    </div>
  );
};

export default DebounceAutoSuggest;
