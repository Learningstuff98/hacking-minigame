const Game = (props) => {
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

  const getRandomInt = (max) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * max);
  }

  const renderTextRow = () => {
    let textRow = ''.split('');
    for(let i = 1; i <= 12; i++) {
      textRow.push(textChars[getRandomInt(15)]);
    }
    return textRow.join('');
  }

  const renderTextWall = () => {
    let textRows = [];
    for(let i = 1; i <= 17; i++) {
      textRows.push(
        <div key={i}>
          {renderTextRow()}
        </div>
      );
    }
    return textRows;
  }

  if(props.isAuthenticated) {
    return <div className="green game-screen-border">
      <div className="text-wall">{renderTextWall()}</div>
      <div className="text-wall">{renderTextWall()}</div>
    </div>
  } else {
    return <h2 className="green">
      You must be logged in to play.
    </h2>
  }
}

export default Game;
