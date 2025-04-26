import React, { useState, useRef } from "react";
import Board from "./board";
import Timer from "../components/timer";
import "./index.css";

const Game = ({onGameOver = () => {}}) => {
  const [resetStatus, setResetStatus] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const stopwatchRef = useRef();

  const handleGameStart = () => {
    setIsRunning(true)
    setResetStatus(resetStatus + 1);
    stopwatchRef.current?.start();
  };

  const handleGameEnd = () => {
    stopwatchRef.current?.stop();
    const finalTime = stopwatchRef.current?.getElapsedTime();
    onGameOver(finalTime)
  };

  const gameDone = () => {
    setIsRunning(false)
    handleGameEnd();
  };

  return (
    <div>
      <Timer ref={stopwatchRef} />
      <div className="playArea">
        <Board
          resetSignal={resetStatus}
          stopSignal={0}
          onDone={() => gameDone()}
        />
      </div>
      {!isRunning && <div className="btn" onClick={() => handleGameStart()}>
        Start Game
      </div>}
    </div>
  );
};

export default Game;
