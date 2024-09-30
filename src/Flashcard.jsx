import React, { useState } from 'react';

const Flashcard = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleNext = () => {
    setFlipped(false);
    const randomIndex = Math.floor(Math.random() * cards.length); // Generate a random index
    setCurrentIndex(randomIndex); // Set the current index to the random index
  };

  return (
    <div className="flashcard-container">
      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flashcard-front">
          <h2>{cards[currentIndex].question}</h2>
        </div>
        <div className="flashcard-back">
          <h2>{cards[currentIndex].answer}</h2>
        </div>
      </div>
      <button className="next-button" onClick={handleNext}>
        Next Question
      </button>
    </div>
  );
};

export default Flashcard;