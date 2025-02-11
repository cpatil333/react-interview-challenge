import React, { useReducer } from "react";

const UseReducerComponent = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          count: state.count - 1,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div>
      <h1>UseReducer Component</h1>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
    </div>
  );
};

export default UseReducerComponent;
