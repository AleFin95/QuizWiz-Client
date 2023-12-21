// import React, { useState, useEffect } from 'react';
// import {useAuth} from "../../contexts"
// import {useNavigate} from 'react-router-dom'

// const Timer = ({flag_page}) => {

//   const [initialMinutes, setInitialMinutes] = useState(0);
//    const { remainingSeconds, setRemainingSeconds } = useAuth()
//   // const [remainingSeconds, setRemainingSeconds] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   const navigate=useNavigate()
//   useEffect(() => {
//     let timer;

//     if (isRunning && remainingSeconds > 0) {
//       timer = setInterval(() => {
//         setRemainingSeconds((prevSeconds) => prevSeconds - 1);
//       }, 1000);
//     } else if (isRunning && remainingSeconds === 0) {
//     if (flag_page === 'quiz') {navigate('/test/quiz-results');}
//       setIsRunning(false);

//     }

//     return () => clearInterval(timer);
//   }, [isRunning, remainingSeconds,flag_page]);

//   const startTimer = () => {
//     const initialTime = flag_page === 'quiz' ? 25 : initialMinutes;
//     setRemainingSeconds(initialTime * 60);

//     setIsRunning(true);
//   };

//   useEffect(() => {
//     // Start the timer when flag_page is 'quiz' and the timer is not already running
//     if (flag_page === 'quiz' && !isRunning) {
//       startTimer();
//     }
//   }, []);
//   //flag_page, isRunning

//   const stopTimer = () => {
//     setIsRunning(false);
//   };

//   const resetTimer = () => {
//     setIsRunning(false);
//     setRemainingSeconds(0);
//   };

//   const handleMinutesChange = (event) => {
//     const minutes = parseInt(event.target.value, 10);
//     setInitialMinutes(isNaN(minutes) ? 0 : minutes);
//   };

//   const handleClick= ()=>{

//     navigate('addnotes', { state: {minutes: initialMinutes} })

//   }

//   return (
//     <>
//           {flag_page === 'quiz' ? (
//         <>
//          <h2>Timer: {Math.floor(remainingSeconds / 60)}:{remainingSeconds % 60}</h2>
//         </>

//       ) : (

//         <div className='timer'>
//             <h1>Timer</h1>
//             <img src="Timer.jpg" alt="Your Image" className="timer-image" />
//             <label>
//                 Set Minutes:
//                 <input type="number" min={0} value={initialMinutes} onChange={handleMinutesChange} />
//             </label>

//             <button onClick={handleClick}>Start</button>
//         </div>

//       )}
//     </>
//   );
// };

// export default Timer;

//slide version-for review

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts';

const Timer = ({ flag_page }) => {
  const [initialMinutes, setInitialMinutes] = useState(1);
  const { remainingSeconds, setRemainingSeconds } = useAuth();
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;

    if (isRunning && remainingSeconds > 0) {
      timer = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (isRunning && remainingSeconds === 0) {
      if (flag_page === 'quiz') {
        navigate('/test/quiz/results');
      }
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, remainingSeconds, navigate, flag_page]);

  const startTimer = () => {
    const initialTime = flag_page === 'quiz' ? 25 : initialMinutes;
    setRemainingSeconds(initialTime * 60);
    setIsRunning(true);
  };

  const handleClick = () => {
    startTimer();
    navigate('/learn/addnotes', { state: { minutes: initialMinutes } });
  };

  const handleSliderChange = (event) => {
    setInitialMinutes(event.target.value);
  };

  return (
    <>
      {flag_page === 'quiz' ? (
        <h2>
          Timer: {Math.floor(remainingSeconds / 60)}:
          {String(remainingSeconds % 60).padStart(2, '0')}
        </h2>
      ) : (
        <div className='timer'>
          <input
            type='range'
            min='1'
            max='60'
            value={initialMinutes}
            onChange={handleSliderChange}
          />
          <div>Set Minutes: {initialMinutes}</div>
          <button onClick={handleClick} disabled={isRunning}>
            Start
          </button>
        </div>
      )}
    </>
  );
};

export default Timer;
