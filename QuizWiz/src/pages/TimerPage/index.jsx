import React, { useState, useEffect } from 'react';
import {useAuth} from "../../contexts"
import {useNavigate} from 'react-router-dom' 
import {Timer} from '../../components'

const TimerPage = () => {
  
  return (

    <Timer flag_page={"add_notes"} /> //Passing the flag depending on page we use 
  );
};

export default TimerPage;
