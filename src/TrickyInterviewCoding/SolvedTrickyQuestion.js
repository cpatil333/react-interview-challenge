import React, { useState } from 'react';

const SolvedTrickyQuestion = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };
  
    return (
      <>
    Count: {count}
        <button onClick={incrementCount}>Increment</button>
    </>
    );
};

export default SolvedTrickyQuestion;
