import React from "react";
import "./index.css";

const OpeningPage = ({
  onClickStartGame = () => {},
  onTopScoreClick = () => {},
}) => {
  return (
    <>
      <div className="openingPage"></div>
      <div className="intro">
        <h1>Robot memory Game</h1>
        <h2>About the game</h2>
        <p>
          This is a classic memory game where a robot shuffles your cards. Each
          card features the name of an Alibaba Cloud service, such as
          <strong>ECS, Function Compute, OSS, EBS, CDN, and ApsaraDB</strong>.
          Your goal is to find matching pairs by clicking to flip the cards.
          Cards will automatically flip back after one second. If you flip more
          than two cards within that second — even if you found a matching pair
          — the move is considered invalid. When you successfully match two
          cards, they will remain face-up and become unclickable. Once you match
          all the pairs, your completion time will be recorded, and you can
          enter your name to appear on the top score board. The faster your
          time, the higher your ranking. Enjoy!
        </p>
        <div className="btn" onClick={() => onClickStartGame()}>
          Start the game
        </div>
        <div className="divider"></div>
        <div className="btn" onClick={() => onTopScoreClick()}>
          Top Scores
        </div>
      </div>
    </>
  );
};

export default OpeningPage;
