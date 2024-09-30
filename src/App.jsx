import React from 'react';
import './App.css';
import Flashcard from './Flashcard';

const cardData = [
  { question: 'What is React?', answer: 'A JavaScript library for building user interfaces' },
  { question: 'What is a component?', answer: 'Reusable building blocks in React' },
  { question: 'What is state?', answer: 'A built-in object that holds data that may change' },
  { question: 'What is a stateless component?', answer: 'A class that extends React component, but does not use internal state' },
  { question: 'What is ReactDOM?', answer: 'An API React uses to give JSX directly to the HTML DOM' },
  { question: 'What is render?', answer: 'Creating the visualization on the screen' },
  // Add more card pairs here as needed
];

const App = () => {
  const cardSetTitle = "React Basics";
  const cardSetDescription = "Learn the fundamentals of React, a popular JavaScript library.";
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