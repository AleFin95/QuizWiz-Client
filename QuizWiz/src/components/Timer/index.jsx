import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts';

const Timer = ({ flag_page, length }) => {
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
        navigate('/progress');
      }
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, remainingSeconds, navigate, flag_page]);

  useEffect(() => {
    // Start the timer when flag_page is 'quiz' and the timer is not already running
    if (flag_page === 'quiz' && !isRunning) {
      startTimer();
    }
  }, []);

  const startTimer = () => {
    const initialTime = flag_page === 'quiz' ? 5 * length : initialMinutes;
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
          <h2 role='heading'>Set your study time</h2>
          <input
            type='range'
            min='1'
            max='120'
            value={initialMinutes}
            onChange={handleSliderChange}
          />
          <h3>{`${initialMinutes} min${initialMinutes != 1 ? 's' : ''}`}</h3>
          <button onClick={handleClick} disabled={isRunning}>
            Start
          </button>
        </div>
      )}
    </>
  );
};

export default Timer;
