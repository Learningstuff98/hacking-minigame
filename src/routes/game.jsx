import { useState, useEffect } from 'react';

const Game = (props) => {
  const [leftTextWall, setLeftTextWall] = useState(null);
  const [rightTextWall, setRightTextWall] = useState(null);

  useEffect(() => {
    setLeftTextWall(textWall());
    setRightTextWall(textWall());
  }, []);

  const textChars = [
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

  const textRow = () => {
    let textRow = [];
    for(let i = 1; i <= 12; i++) {
      textRow.push(
        <div className="text-char" key={i}>
          {textChars[getRandomIndex(15)]}
        </div>
      );
    }
    return textRow;
  }

  const textWall = () => {
    let textRows = [];
    for(let i = 1; i <= 17; i++) {
      textRows.push(
        <div key={i}>
          {textRow()}
        </div>
      );
    }
    return textRows;
  }

  if(props.isAuthenticated) {
    return <div className="green game-screen-border">
      <div className="text-wall">{leftTextWall}</div>
      <div className="text-wall-spacing"></div>
      <div className="text-wall">{rightTextWall}</div>
    </div>
  } else {
    return <h2 className="green">
      You must be logged in to play.
    </h2>
  }
}

export default Game;
