import { useState, useEffect } from 'react';

const Game = (props) => {
  const [textChars, setTextChars] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTextChars(
        `${textChars}${possibleTextChars[getRandomIndex(15)]}`
      );
    }, 1000);
    return () => clearInterval(interval);
  });

  const possibleTextChars = [
    '<',
    '>',
    '[',
    ']',
    '{',
    '}',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')'
  ]

  const getRandomIndex = (maxIndex) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * maxIndex);
  }

  const renderTextChars = () => {
    return textChars.split('').map((textChar, index) => {
      return <div className="green text-char" key={index}>
        {textChar}
      </div>
    });
  };

  if(props.isAuthenticated) {
    return <div className="green game-screen-border">
      {renderTextChars()}
    </div>
  } else {
    return <h2 className="green">
      You must be logged in to play.
    </h2>
  }
}

export default Game;
