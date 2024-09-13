import { useState, useEffect } from 'react';

const Game = (props) => {
  const [textChars, setTextChars] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(!props.isLoading) {
        for(let i = 0; i < 408 && textChars.length < 408; i++) {
          if(textChars.length === wordPlacements[wordIndex]) {
            setTextChars(
              `${textChars}${possibleWords[wordIndex]}`
            );
            setWordIndex(wordIndex + 1);
          } else {
            setTextChars(
              `${textChars}${possibleTextChars[getRandomIndex(15)]}`
            );
          }
        }
      }
    }, 5);
    return () => clearInterval(interval);
  });

  const wordPlacements = [
    22,
    76,
    191,
    248,
    340,
    404
  ];

  const possibleWords = [
    'deck',
    'boot',
    'look',
    'peer',
    'copy',
    'four'
  ];

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
  ];

  const firstAddressSet = [
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
  ];

  const secondAddressSet = [
    '0xFA30',
    '0xFA3C',
    '0xFA48',
    '0xFA54',
    '0xFA60',
    '0xFA6C',
    '0xFA78',
    '0xFA84',
    '0xFA90',
    '0xFA9c',
    '0xFAA8',
    '0xFAB4',
    '0xFAC0',
    '0xFACC',
    '0xFAD8',
    '0xFAE4',
    '0xFAF0'
  ];

  const renderThresholdsFirstAddressSet = [
    0,
    12,
    24,
    36,
    48,
    60,
    72,
    84,
    96,
    108,
    120,
    132,
    144,
    156,
    168,
    180,
    192
  ];

  const renderThresholdsSecondAddressSet = [
    204,
    216,
    228,
    240,
    252,
    264,
    276,
    288,
    300,
    312,
    324,
    336,
    348,
    360,
    372,
    384,
    396
  ];

  const getRandomIndex = (maxIndex) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * maxIndex);
  };

  const isWord = (wordStart, wordEnd) => {
    for(let i = wordStart; i <= wordEnd; i++) {
      if(possibleTextChars.includes(textChars[i])) {
        return false;
      }
    }
    return true;
  };

  const renderWord = (wordStart, wordEnd) => {
    let word = [];
    for(let i = wordStart; i <= wordEnd; i++) {
      word.push(
        <div className="word-char" key={i}>
          {textChars[i]}
        </div>
      );
    }
    return word;
  };

  const isSpecialChar = (index) => {
    return possibleTextChars.includes(textChars[index]);
  };

  const textRow = (start, end) => {
    let row = [];
    let i = start;
    while(i < end) {
      if(textChars[i]) {
        if(isWord(i, i + 3)) {
          row.push(
            <div className="word" key={i}>
              {renderWord(i, i + 3)}
            </div>
          );
          i += 3;
        } else if(isSpecialChar(i)) {
          row.push(
            <div className="text-char" key={i}>
              {textChars[i]}
            </div>
          );
        }
      }
      i++;
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

  const addressWall = (addressSet, renderThresholdsAddressSet) => {
    let memoryAddressWall = [];
    for(let i = 0; i < 17; i++) {
      if(textChars.length > renderThresholdsAddressSet[i]) {
        memoryAddressWall.push(
          <div key={i}>
            {formatChars(addressSet[i])}
          </div>
        );
      }
    }
    return memoryAddressWall;
  };

  if(props.isAuthenticated) {
    return <div className="green game-screen">
      <div className="memory-address-wall">
        {addressWall(firstAddressSet, renderThresholdsFirstAddressSet)}
      </div>
      <div className="text-wall-divider"></div>
      <div className="first-text-wall">
        {textWall(0, 203)}
      </div>
      <div className="text-wall-divider"></div>
      <div className="memory-address-wall">
        {addressWall(secondAddressSet, renderThresholdsSecondAddressSet)}
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
};

export default Game;
