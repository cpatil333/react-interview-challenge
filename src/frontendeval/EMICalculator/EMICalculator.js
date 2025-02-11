import React, { useEffect, useState } from "react";
import "../../styles/EMICalStyle.css";

const EMICalculator = () => {
  const [principale, setPrincipale] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEMI] = useState(0);

  const handleInput = (e) => {
    console.log(e.target.id, e.target.value);
    const id = e.target.id;
    const value = e.target.value;
    if (id === "principale") {
      setPrincipale(value);
    } else if (id === "interest") {
      setInterest(value);
    } else {
      setYears(value);
    }
  };

  //P(r(1+r)^n/((1+r)^n)-1))
  const calculateEMI = () => {
    let r = interest;
    if (principale && r && years) {
      r = (r / 12) / 100; // convert to per month
      const calcPow = Math.pow(1 + r, years * 12);
      const amount = principale * ((r * calcPow) / (calcPow - 1));
      setEMI(Math.round(amount));
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [principale, interest, years]);

  return (
    <div className="loan-calc">
      <h1>Mortage Calculator</h1>
      <div className="inputs">
        <p>Principales : </p>
        <input type="number" id="principale" onChange={handleInput} />
        <p>Interest : </p>
        <input type="number" id="interest" onChange={handleInput} />
        <p>Years : </p>
        <input type="number" id="years" onChange={handleInput} />
      </div>
      <div className="output">Yout EMI is {emi}</div>
    </div>
  );
};

export default EMICalculator;
