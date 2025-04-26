import React, { useEffect, useState } from "react";
import { getRandomCardInfo, cardTypes } from "./cardinfo";
import Card from "../components/card";


const Board = ({ onDone = () => {}, resetSignal = 0, stopSignal = 0 }) => {
  const [cards, setCards] = useState(getRandomCardInfo());
  const [cardStatus, setCardStatus] = useState(
    new Array(cards.length).fill("")
  );
  const [disabledCards, setDisabledCards] = useState(cardTypes);

  const flipBack = (idx) => {
    setCardStatus((prev) => {
      const updated = [...prev];
      updated[idx] = "";
      return updated;
    });
  };

  const flipFront = (card, idx) => {
    setCardStatus((prev) => {
      const updated = [...prev];
      updated[idx] = card;
      return updated;
    });
  };

  useEffect(() => {
    const clickedCards = cardStatus.filter((card) => card !== "");
    if (clickedCards.length === 2 && clickedCards[0] === clickedCards[1]) {
      // it is a hit, the two cards can be disabled
      setDisabledCards((prev) => {
        const clonedPrev = [...prev]
        clonedPrev.push(clickedCards[0])
        return clonedPrev
      });
    }
  }, [cardStatus]);


  // Reset internal state when resetSignal changes
  useEffect(() => {
    setCards(getRandomCardInfo())
    setCardStatus(new Array(cards.length).fill(""));
    setDisabledCards([]);
  }, [resetSignal, cards.length]);

  useEffect(() => {
    setCards(getRandomCardInfo())
    setCardStatus(new Array(cards.length).fill(""));
    setDisabledCards(cardTypes);
  }, [stopSignal, cards.length]);
  

  useEffect(() => {
    if (resetSignal != 0 && disabledCards.length === cards.length / 2) {
      // All the cards are done,
      onDone();
    }
  }, [disabledCards ]);

  return (
    <div>
      <div className="board">
        {cards.map((card, idx) => (
          <Card
            disabled={disabledCards.includes(card)}
            key={idx}
            label={card}
            onCardFlippedBack={(card) => flipBack(idx)}
            onCardFlippedFront={(card) => flipFront(card, idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
