const Game = (props) => {

  if(props.isAuthenticated) {
    return <div className="game-screen-border">

    </div>
  } else {
    return <h2 className="green">
      You must be logged in to play.
    </h2>
  }
};

export default Game;
