import React, { useState, useEffect } from "react";
import Game from "./game";
import "./App.css";
import OpeningPage from "./openingpage";
import Mixer from "./components/mixer";
import GameOver from "./gameover";
import TopScores from "./topScores";

function App() {
  const [gameState, setGameState] = useState({ type: "intro", score: 0 });

  const onGameOver = (time) => {
    setGameState({ type: "gameOver", score: time });
  };

  useEffect(() => {
    let timeOut;
    if (gameState.type === "mixing") {
      timeOut = setTimeout(() => {
        setGameState({ type: "game", score: 0 });
      }, 1000);
    }

    return () => {
      if (timeOut) {
        clearTimeout(timeOut);
      }
    };
  }, [gameState.type]);

  return (
    <div>
      {gameState.type === "intro" && (
        <OpeningPage
          onClickStartGame={() => setGameState({ type: "mixing", score: 0 })}
          onTopScoreClick={() => setGameState({ type: "topScores", score: 0 })}
        />
      )}
      {gameState.type === "mixing" && <Mixer />}
      {gameState.type === "game" && (
        <Game onGameOver={(time) => onGameOver(time)} />
      )}
      {gameState.type === "gameOver" && (
        <GameOver
          time={gameState.score}
          onBack={() => setGameState({ type: "intro", score: 0 })}
        />
      )}
      {gameState.type === "topScores" && (
        <TopScores
          onReturnToGame={() => setGameState({ type: "intro", score: 0 })}
        />
      )}
    </div>
  );
}

export default App;
