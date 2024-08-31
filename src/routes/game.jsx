import { useState, useEffect } from 'react';

const Game = (props) => {
  const [textChars, setTextChars] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if(textChars.length < 408) {
        setTextChars(
          `${textChars}${possibleTextChars[getRandomIndex(15)]}`
        );
      }
    }, 10);
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

  const textRow = (start, end) => {
    let row = [];
    for(let i = start; i < end; i++) {
      if(textChars[i]) {
        row.push(
          <div className="text-char" key={i}>
            {textChars[i]}
          </div>
        );
      }
    }
    return row;
  };

  const textWall = (start, end) => {
    let textWall = [];
    for(let i = start; i <= end; i+= 12) {
      textWall.push(
        <div key={i}>
          {textRow(i, i + 12)}
        </div>
      );
    }
    return textWall;
  };

  if(props.isAuthenticated) {
    return <div className="green game-screen-border">
      <div className="first-text-wall">
        {textWall(0, 203)}
      </div>
      <div className="text-wall-divider"></div>
      <div className="second-text-wall">
        {textWall(204, 407)}
      </div>
    </div>
  } else if(!props.isLoading) {
    return <h2 className="green">
      You must be logged in to play.
    </h2>
  }
}

export default Game;
