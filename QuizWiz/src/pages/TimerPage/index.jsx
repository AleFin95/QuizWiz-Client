import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <>
      <div className='timer'>
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
