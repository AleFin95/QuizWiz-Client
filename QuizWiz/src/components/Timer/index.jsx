import React, { useState, useEffect } from 'react';
import {useAuth} from "../../contexts"
import {useNavigate} from 'react-router-dom' 

const Timer = ({flag_page}) => {
    console.log("flag_page=",flag_page)
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
    // if (flag_page === 'quiz') {navigate('/test/quiz-results');}
      
    }

    return () => clearInterval(timer);
  }, [isRunning, remainingSeconds]);

  const startTimer = () => {
    const initialTime = flag_page === 'quiz' ? 1 : initialMinutes;
    setRemainingSeconds(initialTime * 60);
    // setRemainingSeconds(initialMinutes * 60);
    setIsRunning(true);
  };

  useEffect(() => {
    // Start the timer when flag_page is 'quiz' and the timer is not already running
    if (flag_page === 'quiz' && !isRunning) {
      startTimer();
    }
  }, []);
  //flag_page, isRunning

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

      {flag_page === 'quiz' ? (
        <button onClick={startTimer}>Start</button>
      ) : (

        <>
            <label>
                Set Minutes:
                <input type="number" value={initialMinutes} onChange={handleMinutesChange} />
            </label>

            <button onClick={handleClick}>Start</button>
            <button onClick={stopTimer}>Stop</button>
             <button onClick={resetTimer}>Reset</button>
        </>
        
      )}
      {/* <button onClick={handleClick} >Start</button> */}

    </div>
  );
};

export default Timer;
