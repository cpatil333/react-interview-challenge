import React, { useEffect, useState } from "react";
import "../../styles/CounterStyle.css";
import InputTimer from "./InputTimer";
import ShowTimer from "./ShowTimer";

const CountdownTimer = () => {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHourse] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);

  //On Start button
  const handleStart = () => {
    if (hours < 0 || minutes < 0 || seconds <= 0) {
      alert("Invalid input");
      return false;
    }
    setIsStart(true);
  };

  //On Pause button
  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };

  //On Reset button
  const handleReset = () => {
    setIsStart(false);
    setHourse(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId);
  };

  //input event handle
  const handleInput = (e) => {
    console.log(e.target.id, e.target.value);
    const value = parseInt(e.target.value);
    const id = e.target.id;
    if (id === "hours") {
      setHourse(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else {
      setSeconds(value);
    }
  };

  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSeconds((prev) => prev - 1);
    } else if (sec === 0 && min > 0) {
      setMinutes((prev) => prev - 1);
      setSeconds(59);
    } else {
      setHourse((prev) => prev - 1);
      setMinutes(59);
      setSeconds(59);
    }
    if (sec === 0 && min === 0 && hr === 0) {
      handleReset();
      setHourse(0);
      setMinutes(0);
      setSeconds(0);
      clearInterval(tid);
      alert("Timer is finished");
      return;
    }
  };

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(seconds, minutes, hours, tid);
      }, 1000);
      setTimerId(tid);
    }
    return () => {
      clearInterval(tid);
    };
  }, [isStart, hours, minutes, seconds]);

  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hours);
  };

  //console.log(hours, minutes, seconds);
  return (
    <div>
      <div className="container">
        <h1>Countdown Timer</h1>
        {!isStart && (
          <InputTimer handleInput={handleInput} handleStart={handleStart} />
        )}
        {isStart && (
          <ShowTimer
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            isPaused={isPaused}
            handlePause={handlePause}
            handleResume={handleResume}
            handleReset={handleReset}
          />
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
