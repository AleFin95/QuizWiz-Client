import React from 'react';
import {Timer} from '../../components'
import {LearnInstructionsWrapper} from '../../components'

const TimerPage = () => {
  
  return (
    <>
    <Timer flag_page={"add_notes"} /> //Passing the flag depending on page we use 
    <LearnInstructionsWrapper/>
    </>
  );
};

export default TimerPage;
