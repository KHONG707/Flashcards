import React from 'react';
import './App.css';
import Flashcard from './Flashcard';

const cardData = [
  { question: 'What is the derivative of x^2?', answer: '2x' },
  { question: 'What is the integral of 1/x?', answer: 'ln|x|+C' },
  { question: 'What is the Pythagorean theorem?', answer: 'a^2+b^2=c^2' },
  { question: 'What is 7 multiplied by 8?', answer: '56' },
  { question: 'What is the approximate value of π (Pi) up to 3 digits?', answer: '3.14' },
  { question: 'What is the sum of the angles in a triangle?', answer: '180' },
  { question: 'What is the sine of 90 degrees?', answer: '1' },
  { question: 'What is the cosine of 0 degrees?', answer: '1' },
  { question: 'What is 9 factorial (9!)?', answer: '362880' },
  // Add more card pairs here as needed
];

const App = () => {
  const cardSetTitle = "Math Questions";
  const cardSetDescription = "Test your knowledge on math through this quiz!";
  const totalCards = cardData.length;

  return (
    <div className="app">
      <h1>{cardSetTitle}</h1>
      <p>{cardSetDescription}</p>
      <p>Total Cards: {totalCards}</p>
      <Flashcard cards={cardData} />
    </div>
  );
};

export default App;