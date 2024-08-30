import { useState, useEffect } from 'react';

const Game = (props) => {
  const [textChars, setTextChars] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if(textChars.length <= 408) {
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
    for(let i = start; i <= end; i++) {
      row.push(
        <div className="text-char" key={i}>
          {textChars[i]}
        </div>
      );
    }
    return row;
  };

  if(props.isAuthenticated) {
    return <div className="green game-screen-border">
      <div className="text-wall">
        {textRow(1, 12)}
        <br/>
        {textRow(13, 24)}
        <br/>
        {textRow(25, 36)}
        <br/>
        {textRow(37, 48)}
        <br/>
        {textRow(49, 60)}
        <br/>
        {textRow(61, 72)}
        <br/>
        {textRow(73, 84)}
        <br/>
        {textRow(85, 96)}
        <br/>
        {textRow(97, 108)}
        <br/>
        {textRow(109, 120)}
        <br/>
        {textRow(121, 132)}
        <br/>
        {textRow(133, 144)}
        <br/>
        {textRow(145, 156)}
        <br/>
        {textRow(157, 168)}
        <br/>
        {textRow(169, 180)}
        <br/>
        {textRow(181, 192)}
        <br/>
        {textRow(193, 204)}
      </div>
      <div className="text-wall-divider"></div>
      <div className="text-wall">
        {textRow(205, 216)}
        <br/>
        {textRow(217, 228)}
        <br/>
        {textRow(229, 240)}
        <br/>
        {textRow(241, 252)}
        <br/>
        {textRow(253, 264)}
        <br/>
        {textRow(265, 276)}
        <br/>
        {textRow(277, 288)}
        <br/>
        {textRow(289, 300)}
        <br/>
        {textRow(301, 312)}
        <br/>
        {textRow(313, 324)}
        <br/>
        {textRow(325, 336)}
        <br/>
        {textRow(337, 348)}
        <br/>
        {textRow(349, 360)}
        <br/>
        {textRow(361, 372)}
        <br/>
        {textRow(373, 384)}
        <br/>
        {textRow(385, 396)}
        <br/>
        {textRow(397, 408)}
      </div>
    </div>
  } else {
    return <h2 className="green">
      You must be logged in to play.
    </h2>
  }
}

export default Game;
