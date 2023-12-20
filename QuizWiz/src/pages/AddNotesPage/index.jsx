import React, { useState, useEffect } from 'react';
import NoteForm from "../../components/NoteForm"
import {useAuth} from "../../contexts"
import { useLocation } from 'react-router-dom';
import { LearnInstructionsWrapper } from '../../components';

function AddNotesPage() {
    
    const {state}=useLocation()
    
    const [initialMinutes, setInitialMinutes] = useState(state === null ? 10 : state.minutes);
    const { remainingSeconds, setRemainingSeconds } = useAuth()
    const [isRunning, setIsRunning] = useState(false);
    

    useEffect(() => {
        let timer;
        const startTimer = () => {
            setRemainingSeconds(initialMinutes * 60);
            setIsRunning(true);
          };

        if(!isRunning) {
            startTimer()
        }  
        else if ( isRunning && remainingSeconds > 0){
            timer = setInterval(() => {
                setRemainingSeconds((prevSeconds) => prevSeconds - 1);
              }, 1000);


        }
         else if (remainingSeconds === 0) {
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

    return (
      <>
        <div>
            <h1>Add Note</h1>
           
             <p>Countdown Timer: {Math.floor(remainingSeconds / 60)}:{remainingSeconds % 60}</p> 
            
            <NoteForm />
        </div>
        <LearnInstructionsWrapper />
      </>
    )
}

export default AddNotesPage;
