import React, { useState } from 'react';

const Flashcard = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [inputAnswer, setInputAnswer] = useState(''); 
  const [correct, setCorrect] = useState(null); 
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0); 
  const [masteredCards, setMasteredCards] = useState([]); 
  const [remainingCards, setRemainingCards] = useState(cards); 

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleShuffle = () => {
    const shuffledCards = [...remainingCards].sort(() => Math.random() - 0.5);
    setRemainingCards(shuffledCards);
    setCurrentIndex(0); 
    setFlipped(false); 
  };

  const handleSubmit = () => {
    const currentCard = remainingCards[currentIndex];
    const normalizedInput = inputAnswer.trim().toLowerCase();
    const normalizedAnswer = currentCard.answer.trim().toLowerCase();

    if (normalizedInput === normalizedAnswer) {
      setCorrect(true);
      setStreak(streak + 1);

      if (streak + 1 > longestStreak) {
        setLongestStreak(streak + 1);
      }
    } else {
      setCorrect(false);
      setStreak(0); 
    }

    setFlipped(true); 
    setInputAnswer(''); 
  };

  const handleNext = () => {
    setFlipped(false);
    const nextIndex = (currentIndex + 1) % remainingCards.length;
    setCurrentIndex(nextIndex);
    setCorrect(null); 
  };

  const handleBack = () => {
    setFlipped(false);
    const prevIndex = (currentIndex - 1 + remainingCards.length) % remainingCards.length;
    setCurrentIndex(prevIndex);
    setCorrect(null); 
  };

  const handleMaster = () => {
    const currentCard = remainingCards[currentIndex];
    setMasteredCards([...masteredCards, currentCard]); 
    const newRemainingCards = remainingCards.filter((_, index) => index !== currentIndex); 
    setRemainingCards(newRemainingCards);

    if (newRemainingCards.length > 0) {
      setCurrentIndex(0); 
    } else {
      setCurrentIndex(null); 
    }
    setFlipped(false);
  };

  if (remainingCards.length === 0) {
    return <div>You've mastered all the cards!</div>;
  }

  return (
    <div className="flashcard-container">
      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <h2>{remainingCards[currentIndex].question}</h2>
          </div>
          <div className="flashcard-back">
            <h2>{remainingCards[currentIndex].answer}</h2>
          </div>
        </div>
      </div>

      {!flipped && (
        <div className="input-section">
          <input
            type="text"
            placeholder="Your answer"
            value={inputAnswer}
            onChange={(e) => setInputAnswer(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {flipped && correct !== null && (
        <div>
          {correct ? <p>Correct!</p> : <p>Incorrect. Try again next time!</p>}
        </div>
      )}

      <div className="button-group">
        <button className="nav-button" onClick={handleBack}>
          Back
        </button>
        <button className="nav-button" onClick={handleNext}>
          Next
        </button>
      </div>

      <div className="bottom-button-group">
        <button className="shuffle-button" onClick={handleShuffle}>
          Shuffle Cards
        </button>

        <button className="master-button" onClick={handleMaster}>
          Mark as Mastered
        </button>
      </div>

      <div className="streak-info">
        <p>Current Streak: {streak}</p>
        <p>Longest Streak: {longestStreak}</p>
      </div>

      {masteredCards.length > 0 && (
        <div>
          <h3>Mastered Cards:</h3>
          <ul>
            {masteredCards.map((card, index) => (
              <li key={index}>{card.question}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
