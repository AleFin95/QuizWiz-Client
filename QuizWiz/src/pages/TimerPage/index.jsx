import React from 'react';
import {Timer} from '../../components'
import {LearnInstructionsWrapper} from '../../components'

const TimerPage = () => {
  
  return (
    <>
    <Timer flag_page={"add_notes"} /> 
    <LearnInstructionsWrapper/>
    </>
  );
};

export default TimerPage;
