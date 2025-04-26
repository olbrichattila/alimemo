import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from "react";
import "./index.css"

// Forward ref allows parent to call internal functions
const Timer = forwardRef((props, ref) => {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const startTimeRef = useRef(null);
  const timerRef = useRef(null);

  // Expose functions to parent
  useImperativeHandle(ref, () => ({
    start,
    stop,
    reset,
    getElapsedTime: () => elapsed,
  }));

  useEffect(() => {
    if (running) {
      startTimeRef.current = Date.now() - elapsed * 1000;
      timerRef.current = setInterval(() => {
        const now = Date.now();
        setElapsed(Math.floor((now - startTimeRef.current) / 1000));
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [running]);

  const start = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setElapsed(0);
  };

  return <div className="timer">Elapsed: {elapsed} seconds</div>;
});

export default Timer;