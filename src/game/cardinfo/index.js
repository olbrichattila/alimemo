export const cardTypes = ["ECS", "Function Compute", "OSS", "EBS", "CDN", "ApsaraDB"];

export const getRandomCardInfo = () => {
  let cards = [];
  for (let i = 0; i < cardTypes.length; i++) {
    cards.push(cardTypes[i]);
    cards.push(cardTypes[i]);
  }

  return shuffleArray(cards);
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
