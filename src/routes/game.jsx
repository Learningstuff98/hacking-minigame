const Game = (props) => {

  if(props.isAuthenticated) {
    return <h2 className="green">Game</h2>
  } else {
    return <h2 className="green">
      You must be logged in to play.
    </h2>
  }
};

export default Game;
