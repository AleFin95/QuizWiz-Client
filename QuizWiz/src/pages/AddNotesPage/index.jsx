import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LearnInstructionsWrapper } from "../../components";
import NoteForm from "../../components/NoteForm";
import { useAuth } from "../../contexts";

function AddNotesPage() {
  const { state } = useLocation();

  const [initialMinutes] = useState(state === null ? 10 : state.minutes);
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

  return (
    <>
      <div className="addNotes">
        <h1>Add Note</h1>

        <p>
          Countdown Timer: {Math.floor(remainingSeconds / 60)}:
          {remainingSeconds % 60}
        </p>

        <NoteForm />
      </div>
      <LearnInstructionsWrapper />
    </>
  );
}

export default AddNotesPage;
