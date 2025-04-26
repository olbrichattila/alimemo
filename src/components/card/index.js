import React, { useState, useEffect } from "react";

import "./index.css";

const Card = ({
  label = "",
  disabled = false,
  onCardFlippedBack = () => {},
  onCardFlippedFront = () => {},
}) => {
  const [isBack, setIsBack] = useState(true);

  const cardClick = () => {
    if (!isBack) {
      return;
    }

    onCardFlippedFront(label);
    setIsBack(!isBack);
  };

  useEffect(() => {
    let timeoutId;
    if (!isBack) {
      timeoutId = setTimeout(() => {
        setIsBack(true);
        onCardFlippedBack(label);
      }, 1200);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isBack]);

  if (disabled) {
    return (
      <div className="cardWrapper">
        <div className="card back disabled"></div>
      </div>
    );
  }

  return (
    <div className="cardWrapper">
      <div
        className={`card ${isBack ? "back animate" : "front"}`}
        onClick={() => cardClick()}
      >
        {!isBack && <p>{label}</p>}
      </div>
    </div>
  );
};

export default Card;
