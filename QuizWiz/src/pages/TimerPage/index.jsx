import React, { useState, useEffect } from 'react';
import {useAuth} from "../../contexts"
import {useNavigate} from 'react-router-dom' 

const TimerPage = () => {
  const [initialMinutes, setInitialMinutes] = useState(0);
   const { remainingSeconds, setRemainingSeconds } = useAuth()
  // const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const navigate=useNavigate()
  useEffect(() => {
    let timer;

    if (isRunning && remainingSeconds > 0) {
      timer = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (remainingSeconds === 0) {
      setIsRunning(false);
      
    }

    return () => clearInterval(timer);
  }, [isRunning, remainingSeconds]);

  const startTimer = () => {
    setRemainingSeconds(initialMinutes * 60);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setRemainingSeconds(0);
  };

  const handleMinutesChange = (event) => {
    const minutes = parseInt(event.target.value, 10);
    setInitialMinutes(isNaN(minutes) ? 0 : minutes);
  };

  const handleClick= ()=>{
    console.log("Timer initialminutes",initialMinutes)
    navigate('addnotes', { state: {minutes: initialMinutes} })

  }

  return (
    <div>
      <h1>Countdown Timer: {Math.floor(remainingSeconds / 60)}:{remainingSeconds % 60}</h1>
      <label>
        Set Minutes:
        <input type="number" value={initialMinutes} onChange={handleMinutesChange} />
      </label>
      <button onClick={handleClick} >Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default TimerPage;
