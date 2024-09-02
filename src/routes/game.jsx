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

  // note to self: add more addresses
  const memoryAddresses = [
    '0xF964',
    '0xF970',
    '0xF97C',
    '0xF988',
    '0xF944',
    '0xF9A0',
    '0xF9AC',
    '0xF9B8',
    '0xF9C4',
    '0xF9D0',
    '0xF9DC',
    '0xF9E8',
    '0xF9F4',
    '0xFA00',
    '0xFA0D',
    '0xFA18',
    '0xFA24'
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

  const formatChars = (address) => {
    let chars = [];
    for(let i = 0; i <= 5; i++) {
      chars.push(
        <div className="address-char" key={i}>
          {address[i]}
        </div>
      );
    }
    return chars;
  };

  const renderMemoryAddresses = () => {
    let memoryAddressWall = [];
    for(let i = 0; i < 17; i++) {
      memoryAddressWall.push(
        <div key={i}>
          {formatChars(memoryAddresses[i])}
        </div>
      );
    }
    return memoryAddressWall;
  };

  if(props.isAuthenticated) {
    return <div className="green game-screen-border">
      <div className="memory-address-wall">
        {renderMemoryAddresses()}
      </div>
      <div className="text-wall-divider"></div>
      <div className="first-text-wall">
        {textWall(0, 203)}
      </div>
      <div className="text-wall-divider"></div>
      <div className="memory-address-wall">
        {renderMemoryAddresses()}
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
