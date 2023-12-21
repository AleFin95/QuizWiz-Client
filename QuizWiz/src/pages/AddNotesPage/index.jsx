
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LearnInstructionsWrapper } from "../../components";
import NoteForm from "../../components/NoteForm"; // Ensure this is the correct path to your NoteForm component
import { useAuth } from "../../contexts";

function AddNotesPage() {
  const { state } = useLocation();
  const [initialMinutes] = useState(state?.minutes ?? 10);
  const { remainingSeconds, setRemainingSeconds } = useAuth();
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    const startTimer = () => {
      setRemainingSeconds(initialMinutes * 60);
      setIsRunning(true);
    };

    if (!isRunning) {
      startTimer();
    } else if (isRunning && remainingSeconds > 0) {
      timer = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (remainingSeconds === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [initialMinutes, isRunning, remainingSeconds, setRemainingSeconds]);

  // Format the remaining time into MM:SS format
  const formattedTime = `${Math.floor(remainingSeconds / 60)
    .toString()
    .padStart(2, "0")}:${(remainingSeconds % 60).toString().padStart(2, "0")}`;

    return (
      <div className="addNotesPage">
        <h1></h1>
        <NoteForm id="note-form" />
        <LearnInstructionsWrapper />
        <p className="my-paragraph">Countdown Timer: {formattedTime}</p>
      </div>
    );
    
}

export default AddNotesPage;
