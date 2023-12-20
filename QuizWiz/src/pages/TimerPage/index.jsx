import React, { useState, useEffect } from 'react';
import {useAuth} from "../../contexts"
import {useNavigate} from 'react-router-dom' 
import { LearnInstructionsWrapper } from '../../components';

const TimerPage = () => {
  const [initialMinutes, setInitialMinutes] = useState(0);

  const navigate = useNavigate();

  const handleMinutesChange = (event) => {
    const minutes = parseInt(event.target.value, 10);
    setInitialMinutes(isNaN(minutes) ? 0 : minutes);
  };

  const handleClick = () => {
    console.log('Timer initialminutes', initialMinutes);
    navigate('addnotes', { state: { minutes: initialMinutes } });
  };

  return (
<<<<<<< HEAD
    <div className='timer'>
      <h1>Countdown Timer: {Math.floor(remainingSeconds / 60)}:{remainingSeconds % 60}</h1>
=======
    <>
    <div>
>>>>>>> f2612153f246b287e6a34a769182fdc734d51b5b
      <label>
        Set Minutes:
        <input
          type='number'
          value={initialMinutes}
          onChange={handleMinutesChange}
        />
      </label>
      <button onClick={handleClick}>Start</button>
    </div>
    <LearnInstructionsWrapper />
    </>
  );
};

export default TimerPage;
